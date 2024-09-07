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
exports.CreateRentDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
class CreateRentDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, phoneNumber: { required: true, type: () => String }, startDate: { required: true, type: () => Date }, endDate: { required: true, type: () => Date }, status: { required: true, type: () => Object }, guarantee: { required: false, type: () => String }, amount: { required: true, type: () => Number }, paymentType: { required: true, type: () => Object }, incomePersentage: { required: true, type: () => [Number] }, carId: { required: true, type: () => Number } };
    }
}
exports.CreateRentDto = CreateRentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['PLEDGE', 'PENDING', 'PAID', 'DUTY'] }),
    __metadata("design:type", String)
], CreateRentDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['CASH', 'CARD'] }),
    __metadata("design:type", String)
], CreateRentDto.prototype, "paymentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'array',
        items: { type: 'number' },
        minItems: 3,
        maxItems: 3,
        example: [40, 30, 30],
    }),
    __metadata("design:type", Array)
], CreateRentDto.prototype, "incomePersentage", void 0);
//# sourceMappingURL=create-rent.dto.js.map