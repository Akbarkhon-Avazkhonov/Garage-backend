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
exports.OutcomeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let OutcomeService = class OutcomeService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createOutcomeDto) {
        return await this.prisma.outcome.create({
            data: createOutcomeDto,
        });
    }
    async findAll() {
        return await this.prisma.outcome.findMany();
    }
    async findSome(take, skip) {
        return await this.prisma.outcome.findMany({
            take: take,
            skip: skip,
        });
    }
    async findOne(id) {
        return await this.prisma.outcome.findUnique({
            where: {
                id: id,
            },
        });
    }
    async update(id, updateOutcomeDto) {
        return await this.prisma.outcome.update({
            where: {
                id: id,
            },
            data: updateOutcomeDto,
        });
    }
    async remove(id) {
        return await this.prisma.outcome.delete({
            where: {
                id: id,
            },
        });
    }
};
exports.OutcomeService = OutcomeService;
exports.OutcomeService = OutcomeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OutcomeService);
//# sourceMappingURL=outcome.service.js.map