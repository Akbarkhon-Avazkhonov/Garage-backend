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
        run: number;
        owner: import(".prisma/client").$Enums.Owner;
    }>;
    findAll(): Promise<{
        id: number;
        model: string;
        carNumber: string;
        run: number;
        owner: import(".prisma/client").$Enums.Owner;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        model: string;
        carNumber: string;
        run: number;
        owner: import(".prisma/client").$Enums.Owner;
    }>;
    update(id: number, updateCarDto: UpdateCarDto): Promise<{
        id: number;
        model: string;
        carNumber: string;
        run: number;
        owner: import(".prisma/client").$Enums.Owner;
    }>;
    remove(id: number): Promise<{
        id: number;
        model: string;
        carNumber: string;
        run: number;
        owner: import(".prisma/client").$Enums.Owner;
    }>;
}
