import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
export declare class CarController {
    private readonly carService;
    constructor(carService: CarService);
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
    findOne(id: string): Promise<{
        id: number;
        model: string;
        carNumber: string;
        run: string;
        owner: import(".prisma/client").$Enums.Owner;
        isActive: boolean;
    }>;
    update(id: string, updateCarDto: UpdateCarDto): Promise<{
        id: number;
        model: string;
        carNumber: string;
        run: string;
        owner: import(".prisma/client").$Enums.Owner;
        isActive: boolean;
    }>;
    remove(id: string): Promise<{
        id: number;
        model: string;
        carNumber: string;
        run: string;
        owner: import(".prisma/client").$Enums.Owner;
        isActive: boolean;
    }>;
}
