import { Status, PaymentType } from '@prisma/client';
export declare class CreateRentDto {
    name: string;
    phoneNumber: string;
    startDate: Date;
    endDate: Date;
    status: Status;
    guarantee?: string;
    amount: number;
    paymentType: PaymentType;
    incomePersentage: number[];
    carId: number;
}
