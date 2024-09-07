"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let CarService = class CarService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCarDto) {
        return await this.prisma.car.create({
            data: createCarDto,
        });
    }
    async findAll() {
        return await this.prisma.car.findMany();
    }
    async findOne(id) {
        return await this.prisma.car.findUnique({
            where: { id: +id },
        });
    }
    async update(id, updateCarDto) {
        return await this.prisma.car.update({
            where: { id: id },
            data: updateCarDto,
        });
    }
    async remove(id) {
        return await this.prisma.car.delete({
            where: { id: +id },
        });
    }
};
exports.CarService = CarService;
exports.CarService = CarService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CarService);
//# sourceMappingURL=car.service.js.map