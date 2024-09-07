import { CreateOutcomeDto } from './dto/create-outcome.dto';
import { UpdateOutcomeDto } from './dto/update-outcome.dto';
import { PrismaService } from 'src/prisma.service';
export declare class OutcomeService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createOutcomeDto: CreateOutcomeDto): Promise<{
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
    findSome(take: number, skip: number): Promise<{
        id: number;
        owner: import(".prisma/client").$Enums.Owner;
        comment: string;
        amount: number;
        createdAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        owner: import(".prisma/client").$Enums.Owner;
        comment: string;
        amount: number;
        createdAt: Date;
    }>;
    update(id: number, updateOutcomeDto: UpdateOutcomeDto): Promise<{
        id: number;
        owner: import(".prisma/client").$Enums.Owner;
        comment: string;
        amount: number;
        createdAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        owner: import(".prisma/client").$Enums.Owner;
        comment: string;
        amount: number;
        createdAt: Date;
    }>;
}
