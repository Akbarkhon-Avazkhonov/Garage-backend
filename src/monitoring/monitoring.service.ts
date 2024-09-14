import { Injectable } from '@nestjs/common';
import { Owner } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MonitoringService {
  constructor(private prisma: PrismaService) {}
  async findRentsByMonth(year: number, month: number) {
    return await this.prisma.rent.count({
      where: {
        AND: [
          { endDate: { gte: new Date(year, month - 1, 1) } },
          { endDate: { lt: new Date(year, month, 1) } },
          { OR: [{ status: 'PAID' }, { status: 'DUTY' }] },
        ],
      },
    });
  }

  async findIncomeByMonth(year: number, month: number) {
    const rentIncome = await this.prisma.rent.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        AND: [
          { endDate: { gte: new Date(year, month - 1, 1) } },
          { endDate: { lt: new Date(year, month, 1) } },
          { OR: [{ status: 'PAID' }, { status: 'DUTY' }] },
        ],
      },
    });

    const income = await this.prisma.income.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        AND: [
          { createdAt: { gte: new Date(year, month - 1, 1) } },
          { createdAt: { lt: new Date(year, month, 1) } },
        ],
      },
    });

    const outcome = await this.prisma.outcome.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        AND: [
          { createdAt: { gte: new Date(year, month - 1, 1) } },
          { createdAt: { lt: new Date(year, month, 1) } },
        ],
      },
    });

    const duty = await this.prisma.rent.aggregate({
      _sum: {
        guaranteeAmount: true,
      },
      where: {
        AND: [{ status: 'DUTY' }],
      },
    });
    const sum = {
      income: +income._sum.amount,
      rentIncome: +rentIncome._sum.amount,
      totalIncome: +income._sum.amount + rentIncome._sum.amount,
      outcome: +outcome._sum.amount,
      total: income._sum.amount + rentIncome._sum.amount - outcome._sum.amount,
      duty: +duty._sum.guaranteeAmount,
    };

    return sum;
  }
  async findIncomeByPersentage() {
    const adminIncome = await this.prisma.income.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        AND: [{ owner: 'ADMIN' }],
      },
    });
    const investorIncome = await this.prisma.income.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        AND: [{ owner: 'INVESTOR' }],
      },
    });
    const partnerIncome = await this.prisma.income.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        AND: [{ owner: 'PARTNER' }],
      },
    });

    const rentIncome = await this.prisma.rent.aggregate({
      _sum: {
        adminIncome: true,
        investorIncome: true,
        partnerIncome: true,
      },
      where: {
        AND: [{ status: 'PAID' }],
      },
    });
    const adminOutcome = await this.prisma.outcome.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        AND: [{ owner: 'ADMIN' }],
      },
    });
    const investorOutcome = await this.prisma.outcome.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        AND: [{ owner: 'INVESTOR' }],
      },
    });
    const partnerOutcome = await this.prisma.outcome.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        AND: [{ owner: 'PARTNER' }],
      },
    });
    return {
      adminIncome:
        +adminIncome._sum.amount +
        rentIncome._sum.adminIncome -
        adminOutcome._sum.amount,
      investorIncome:
        +investorIncome._sum.amount +
        rentIncome._sum.investorIncome -
        investorOutcome._sum.amount,
      partnerIncome:
        +partnerIncome._sum.amount +
        rentIncome._sum.partnerIncome -
        partnerOutcome._sum.amount,
    };
  }

  async findHistoryByMonth(year: number, month: number) {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 1);

    // Fetching rent, income, and outcome histories
    const rentHistory = await this.prisma.rent.findMany({
      where: {
        AND: [
          { endDate: { gte: startDate } },
          { endDate: { lt: endDate } },
          { OR: [{ status: 'PAID' }, { status: 'DUTY' }] },
        ],
      },
      include: {
        Car: true,
      },
    });

    const incomeHistory = await this.prisma.income.findMany({
      where: {
        AND: [
          { createdAt: { gte: startDate } },
          { createdAt: { lt: endDate } },
        ],
      },
    });

    const outcomeHistory = await this.prisma.outcome.findMany({
      where: {
        AND: [
          { createdAt: { gte: startDate } },
          { createdAt: { lt: endDate } },
        ],
      },
    });

    // Helper function to calculate total income or outcome by role
    const calculateTotalByRole = (history, role, type) => {
      if (type === 'income') {
        return history.reduce((total, item) => {
          if (item.owner === role) {
            return total + (type === 'income' ? item.amount : 0);
          }
          return total;
        }, 0);
      }
      return history.reduce((total, item) => {
        if (item.owner === role) {
          return total + (type === 'outcome' ? item.amount : 0);
        }
        return total;
      }, 0);
    };

    // Helper function to calculate rent income by role
    const calculateRentIncomeByRole = (rentHistory, role) => {
      return rentHistory.reduce((total, rent) => {
        return total + (rent[`${role.toLowerCase()}Income`] || 0);
      }, 0);
    };

    // Grouping data by date
    const groupByDate = (data) => {
      return data.reduce((acc, item) => {
        const dateKey = new Date(item.createdAt || item.endDate)
          .toISOString()
          .split('T')[0];
        if (!acc[dateKey]) {
          acc[dateKey] = { income: 0, outcome: 0, rent: 0, detailed: [] };
        }
        if (item.type === 'income') {
          acc[dateKey].income += item.amount;
        } else if (item.type === 'outcome') {
          acc[dateKey].outcome += item.amount;
        } else if (item.type === 'rent') {
          acc[dateKey].rent += item.amount;
        }
        acc[dateKey].detailed.push(item);
        return acc;
      }, {});
    };

    // Create role-based history entries
    const historyByRole = (role) => {
      const historyIncome = incomeHistory
        .filter((item) => item.owner === role)
        .map((item) => ({ ...item, type: 'income' }));

      const historyOutcome = outcomeHistory
        .filter((item) => item.owner === role)
        .map((item) => ({ ...item, type: 'outcome' }));

      const historyRent = rentHistory.map((item) => {
        const roleIncome = item[`${role.toLowerCase()}Income`] || 0;
        return {
          ...item,
          amount: roleIncome,
          sum: roleIncome,
          type: 'rent',
          createdAt: item.endDate,
        };
      });

      // Combine all history entries
      const combinedHistory = [
        ...historyIncome,
        ...historyRent,
        ...historyOutcome,
      ];

      // Group combined history by date
      const groupedHistory = groupByDate(combinedHistory);

      // Convert grouped history to array format
      const dailySummary = Object.keys(groupedHistory)
        .map((date) => ({
          date,
          ...groupedHistory[date],
        }))
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );

      return {
        dailySummary,
      };
    };

    // Calculate total income and outcome for each role
    const total = {
      admin: {
        income:
          calculateTotalByRole(incomeHistory, 'ADMIN', 'income') +
          calculateRentIncomeByRole(rentHistory, 'ADMIN'),
        outcome: calculateTotalByRole(outcomeHistory, 'ADMIN', 'outcome'),
      },
      investor: {
        income:
          calculateTotalByRole(incomeHistory, 'INVESTOR', 'income') +
          calculateRentIncomeByRole(rentHistory, 'INVESTOR'),
        outcome: calculateTotalByRole(outcomeHistory, 'INVESTOR', 'outcome'),
      },
      partner: {
        income:
          calculateTotalByRole(incomeHistory, 'PARTNER', 'income') +
          calculateRentIncomeByRole(rentHistory, 'PARTNER'),
        outcome: calculateTotalByRole(outcomeHistory, 'PARTNER', 'outcome'),
      },
    };

    // Return the final result with daily summaries for each role
    const history = {
      admin: historyByRole('ADMIN'),
      investor: historyByRole('INVESTOR'),
      partner: historyByRole('PARTNER'),
    };

    return {
      total,
      history,
    };
  }
}
