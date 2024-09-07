import { Owner } from '@prisma/client';
export declare class CreateIncomeDto {
    owner: Owner;
    comment: string;
    amount: number;
}
