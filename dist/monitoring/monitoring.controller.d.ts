import { MonitoringService } from './monitoring.service';
export declare class MonitoringController {
    private readonly monitoringService;
    constructor(monitoringService: MonitoringService);
    findRentsByMonth(year: string, month: string): Promise<number>;
    findIncomeByMonth(year: string, month: string): Promise<{
        income: number;
        rentIncome: number;
        totalIncome: number;
        outcome: number;
        total: number;
    }>;
    findIncomeByPersentage(): Promise<{
        adminIncome: number;
        investorIncome: number;
        partnerIncome: number;
    }>;
    findHistoryByMonth(year: string, month: string): Promise<{
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
