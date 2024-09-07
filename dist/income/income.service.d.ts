import { CreateIncomeDto } from './dto/create-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';
import { PrismaService } from 'src/prisma.service';
export declare class IncomeService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): string;
    update(id: number, updateIncomeDto: UpdateIncomeDto): string;
    remove(id: number): string;
}
