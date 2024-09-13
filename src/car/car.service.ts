import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}
  async create(createCarDto: CreateCarDto) {
    return await this.prisma.car.create({
      data: createCarDto,
    });
  }

  async findAll() {
    return await this.prisma.car.findMany();
  }

  async findFree() {
    return await this.prisma.car.findMany({
      where: {
        Rent: {
          none: { status: 'PLEDGE' },
        },
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.car.findUnique({
      where: { id: +id },
    });
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    return await this.prisma.car.update({
      where: { id: id },
      data: updateCarDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.car.delete({
      where: { id: +id },
    });
  }
}
