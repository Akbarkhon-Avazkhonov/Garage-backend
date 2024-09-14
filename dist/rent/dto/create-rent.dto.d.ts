import { Status, PaymentType } from '@prisma/client';
export declare class CreateRentDto {
    name: string;
    phoneNumber: string;
    startDate: Date;
    endDate: Date;
    status: Status;
    guaranteeType: PaymentType;
    guaranteeAmount: number;
    amount: number;
    paymentType: PaymentType;
    incomePersentage: number[];
    carId: number;
}
