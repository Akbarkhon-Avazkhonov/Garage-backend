import { RentService } from './rent.service';
import { CreateRentDto } from './dto/create-rent.dto';
import { UpdateRentDto } from './dto/update-rent.dto';
export declare class RentController {
    private readonly rentService;
    constructor(rentService: RentService);
    create(createRentDto: CreateRentDto): Promise<{
        id: number;
        name: string;
        phoneNumber: string;
        startDate: Date;
        endDate: Date;
        status: import(".prisma/client").$Enums.Status;
        guaranteeAmount: number;
        guaranteeType: import(".prisma/client").$Enums.PaymentType;
        amount: number;
        paymentType: import(".prisma/client").$Enums.PaymentType;
        incomePersentage: number[];
        adminIncome: number;
        investorIncome: number;
        partnerIncome: number;
        carId: number;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        phoneNumber: string;
        startDate: Date;
        endDate: Date;
        status: import(".prisma/client").$Enums.Status;
        guaranteeAmount: number;
        guaranteeType: import(".prisma/client").$Enums.PaymentType;
        amount: number;
        paymentType: import(".prisma/client").$Enums.PaymentType;
        incomePersentage: number[];
        adminIncome: number;
        investorIncome: number;
        partnerIncome: number;
        carId: number;
    }[]>;
    findSome(take: string, skip: string): Promise<{
        id: number;
        name: string;
        phoneNumber: string;
        startDate: Date;
        endDate: Date;
        status: import(".prisma/client").$Enums.Status;
        guaranteeAmount: number;
        guaranteeType: import(".prisma/client").$Enums.PaymentType;
        amount: number;
        paymentType: import(".prisma/client").$Enums.PaymentType;
        incomePersentage: number[];
        adminIncome: number;
        investorIncome: number;
        partnerIncome: number;
        carId: number;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
        phoneNumber: string;
        startDate: Date;
        endDate: Date;
        status: import(".prisma/client").$Enums.Status;
        guaranteeAmount: number;
        guaranteeType: import(".prisma/client").$Enums.PaymentType;
        amount: number;
        paymentType: import(".prisma/client").$Enums.PaymentType;
        incomePersentage: number[];
        adminIncome: number;
        investorIncome: number;
        partnerIncome: number;
        carId: number;
    }>;
    search(search: string): Promise<{
        id: number;
        name: string;
        phoneNumber: string;
        startDate: Date;
        endDate: Date;
        status: import(".prisma/client").$Enums.Status;
        guaranteeAmount: number;
        guaranteeType: import(".prisma/client").$Enums.PaymentType;
        amount: number;
        paymentType: import(".prisma/client").$Enums.PaymentType;
        incomePersentage: number[];
        adminIncome: number;
        investorIncome: number;
        partnerIncome: number;
        carId: number;
    }[]>;
    update(id: string, updateRentDto: UpdateRentDto): Promise<{
        id: number;
        name: string;
        phoneNumber: string;
        startDate: Date;
        endDate: Date;
        status: import(".prisma/client").$Enums.Status;
        guaranteeAmount: number;
        guaranteeType: import(".prisma/client").$Enums.PaymentType;
        amount: number;
        paymentType: import(".prisma/client").$Enums.PaymentType;
        incomePersentage: number[];
        adminIncome: number;
        investorIncome: number;
        partnerIncome: number;
        carId: number;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        phoneNumber: string;
        startDate: Date;
        endDate: Date;
        status: import(".prisma/client").$Enums.Status;
        guaranteeAmount: number;
        guaranteeType: import(".prisma/client").$Enums.PaymentType;
        amount: number;
        paymentType: import(".prisma/client").$Enums.PaymentType;
        incomePersentage: number[];
        adminIncome: number;
        investorIncome: number;
        partnerIncome: number;
        carId: number;
    }>;
}
