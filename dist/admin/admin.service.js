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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma.service");
let AdminService = class AdminService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async login(name, password) {
        if (name != process.env.ADMIN_NAME &&
            name != process.env.OPERATOR_NAME &&
            name != process.env.FINANCE_NAME) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (name === process.env.ADMIN_NAME) {
            if (!(await bcrypt.compare(password, process.env.ADMIN_PASSWORD))) {
                throw new common_1.HttpException('Wrong password', common_1.HttpStatus.UNAUTHORIZED);
            }
            const payload = { sub: 1, name: name };
            return {
                access_token: await this.jwtService.signAsync(payload),
                name: name,
                role: 'admin',
            };
        }
        else if (name === process.env.OPERATOR_NAME) {
            if (!(await bcrypt.compare(password, process.env.OPERATOR_PASSWORD))) {
                throw new common_1.HttpException('Wrong password', common_1.HttpStatus.UNAUTHORIZED);
            }
            const payload = { sub: 1, name: name };
            return {
                access_token: await this.jwtService.signAsync(payload),
                name: name,
                role: 'operator',
            };
        }
        else if (name === process.env.FINANCE_NAME) {
            if (!(await bcrypt.compare(password, process.env.FINANCE_PASSWORD))) {
                throw new common_1.HttpException('Wrong password', common_1.HttpStatus.UNAUTHORIZED);
            }
            const payload = { sub: 1, name: name };
            return {
                access_token: await this.jwtService.signAsync(payload),
                name: name,
                role: 'finance',
            };
        }
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AdminService);
//# sourceMappingURL=admin.service.js.map