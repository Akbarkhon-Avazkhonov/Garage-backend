import { OutcomeService } from './outcome.service';
import { CreateOutcomeDto } from './dto/create-outcome.dto';
import { UpdateOutcomeDto } from './dto/update-outcome.dto';
export declare class OutcomeController {
    private readonly outcomeService;
    constructor(outcomeService: OutcomeService);
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
    findOne(id: string): Promise<{
        id: number;
        owner: import(".prisma/client").$Enums.Owner;
        comment: string;
        amount: number;
        createdAt: Date;
    }>;
    update(id: string, updateOutcomeDto: UpdateOutcomeDto): Promise<{
        id: number;
        owner: import(".prisma/client").$Enums.Owner;
        comment: string;
        amount: number;
        createdAt: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        owner: import(".prisma/client").$Enums.Owner;
        comment: string;
        amount: number;
        createdAt: Date;
    }>;
}
