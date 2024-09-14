import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'src/prisma.service';
export declare class CarService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createCarDto: CreateCarDto): Promise<{
        id: number;
        model: string;
        carNumber: string;
        run: string;
        owner: import(".prisma/client").$Enums.Owner;
        isActive: boolean;
    }>;
    findAll(): Promise<{
        id: number;
        model: string;
        carNumber: string;
        run: string;
        owner: import(".prisma/client").$Enums.Owner;
        isActive: boolean;
    }[]>;
    findFree(): Promise<{
        id: number;
        model: string;
        carNumber: string;
        run: string;
        owner: import(".prisma/client").$Enums.Owner;
        isActive: boolean;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        model: string;
        carNumber: string;
        run: string;
        owner: import(".prisma/client").$Enums.Owner;
        isActive: boolean;
    }>;
    update(id: number, updateCarDto: UpdateCarDto): Promise<{
        id: number;
        model: string;
        carNumber: string;
        run: string;
        owner: import(".prisma/client").$Enums.Owner;
        isActive: boolean;
    }>;
    remove(id: number): Promise<{
        id: number;
        model: string;
        carNumber: string;
        run: string;
        owner: import(".prisma/client").$Enums.Owner;
        isActive: boolean;
    }>;
}
