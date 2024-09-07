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
exports.RentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let RentService = class RentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createRentDto) {
        try {
            if (createRentDto.incomePersentage[0] +
                createRentDto.incomePersentage[1] +
                createRentDto.incomePersentage[2] !=
                100) {
                throw new common_1.HttpException('Income persentage must be 100', common_1.HttpStatus.BAD_REQUEST);
            }
            return await this.prisma.rent.create({
                data: {
                    ...createRentDto,
                    adminIncome: (createRentDto.amount * createRentDto.incomePersentage[0]) / 100,
                    investorIncome: (createRentDto.amount * createRentDto.incomePersentage[1]) / 100,
                    partnerIncome: (createRentDto.amount * createRentDto.incomePersentage[2]) / 100,
                },
            });
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        return await this.prisma.rent.findMany({ orderBy: { id: 'desc' } });
    }
    async findSome(take, skip) {
        try {
            return await this.prisma.rent.findMany({
                orderBy: { id: 'desc' },
                take: take,
                skip: skip,
            });
        }
        catch (error) {
            throw new common_1.HttpException(error, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        return await this.prisma.rent.findUnique({
            where: { id: +id },
        });
    }
    async search(search) {
        return await this.prisma.rent.findMany({
            where: {
                OR: [
                    {
                        name: {
                            contains: search,
                            mode: 'insensitive',
                        },
                    },
                    {
                        phoneNumber: {
                            contains: search,
                            mode: 'insensitive',
                        },
                    },
                ],
            },
        });
    }
    async update(id, updateRentDto) {
        return await this.prisma.rent.update({
            where: { id: id },
            data: {
                ...updateRentDto,
                adminIncome: (updateRentDto.amount * updateRentDto.incomePersentage[0]) / 100,
                investorIncome: (updateRentDto.amount * updateRentDto.incomePersentage[1]) / 100,
                partnerIncome: (updateRentDto.amount * updateRentDto.incomePersentage[2]) / 100,
            },
        });
    }
    async remove(id) {
        return await this.prisma.rent.delete({
            where: { id: +id },
        });
    }
};
exports.RentService = RentService;
exports.RentService = RentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RentService);
//# sourceMappingURL=rent.service.js.map