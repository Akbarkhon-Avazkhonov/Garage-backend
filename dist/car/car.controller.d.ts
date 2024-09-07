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
    findOne(id: string): Promise<{
        id: number;
        model: string;
        carNumber: string;
        run: number;
        owner: import(".prisma/client").$Enums.Owner;
    }>;
    update(id: string, updateCarDto: UpdateCarDto): Promise<{
        id: number;
        model: string;
        carNumber: string;
        run: number;
        owner: import(".prisma/client").$Enums.Owner;
    }>;
    remove(id: string): Promise<{
        id: number;
        model: string;
        carNumber: string;
        run: number;
        owner: import(".prisma/client").$Enums.Owner;
    }>;
}
