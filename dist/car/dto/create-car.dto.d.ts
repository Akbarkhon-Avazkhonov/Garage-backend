import { Owner } from '@prisma/client';
export declare class CreateCarDto {
    model: string;
    carNumber: string;
    run: string;
    owner: Owner;
}
