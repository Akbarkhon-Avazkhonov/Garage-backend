import { IncomeService } from './income.service';
import { CreateIncomeDto } from './dto/create-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';
export declare class IncomeController {
    private readonly incomeService;
    constructor(incomeService: IncomeService);
    create(createIncomeDto: CreateIncomeDto): Promise<{
        id: number;
        owner: import(".prisma/client").$Enums.Owner;
        comment: string;
        amount: number;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        owner: import(".prisma/client").$Enums.Owner;
        comment: string;
        amount: number;
        createdAt: Date;
    }[]>;
    findOne(id: string): string;
    update(id: string, updateIncomeDto: UpdateIncomeDto): string;
    remove(id: string): string;
}
