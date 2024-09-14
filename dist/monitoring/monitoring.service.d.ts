import { PrismaService } from 'src/prisma.service';
export declare class MonitoringService {
    private prisma;
    constructor(prisma: PrismaService);
    findRentsByMonth(year: number, month: number): Promise<number>;
    findIncomeByMonth(year: number, month: number): Promise<{
        income: number;
        rentIncome: number;
        totalIncome: number;
        outcome: number;
        total: number;
        duty: number;
    }>;
    findIncomeByPersentage(): Promise<{
        adminIncome: number;
        investorIncome: number;
        partnerIncome: number;
    }>;
    findHistoryByMonth(year: number, month: number): Promise<{
        total: {
            admin: {
                income: any;
                outcome: any;
            };
            investor: {
                income: any;
                outcome: any;
            };
            partner: {
                income: any;
                outcome: any;
            };
        };
        history: {
            admin: {
                dailySummary: any[];
            };
            investor: {
                dailySummary: any[];
            };
            partner: {
                dailySummary: any[];
            };
        };
    }>;
}
