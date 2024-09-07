import { Owner } from '@prisma/client';
export declare class CreateCarDto {
    model: string;
    carNumber: string;
    run: number;
    owner: Owner;
}
