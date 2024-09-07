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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const rent_service_1 = require("./rent.service");
const create_rent_dto_1 = require("./dto/create-rent.dto");
const update_rent_dto_1 = require("./dto/update-rent.dto");
const swagger_1 = require("@nestjs/swagger");
let RentController = class RentController {
    constructor(rentService) {
        this.rentService = rentService;
    }
    create(createRentDto) {
        return this.rentService.create(createRentDto);
    }
    findAll() {
        return this.rentService.findAll();
    }
    findSome(take, skip) {
        return this.rentService.findSome(+take, +skip);
    }
    findOne(id) {
        return this.rentService.findOne(+id);
    }
    search(id, updateRentDto) {
        return this.rentService.update(+id, updateRentDto);
    }
    update(id, updateRentDto) {
        return this.rentService.update(+id, updateRentDto);
    }
    remove(id) {
        return this.rentService.remove(+id);
    }
};
exports.RentController = RentController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rent_dto_1.CreateRentDto]),
    __metadata("design:returntype", void 0)
], RentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RentController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get some rents with pagination' }),
    (0, swagger_1.ApiParam)({
        name: 'take',
        description: 'Number of items to take',
        type: 'number',
    }),
    (0, swagger_1.ApiParam)({
        name: 'skip',
        description: 'Number of items to skip',
        type: 'number',
    }),
    (0, common_1.Get)('some/:take/:skip'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('take')),
    __param(1, (0, common_1.Param)('skip')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], RentController.prototype, "findSome", null);
__decorate([
    (0, common_1.Get)('byId/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('search/:search'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('search')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_rent_dto_1.UpdateRentDto]),
    __metadata("design:returntype", void 0)
], RentController.prototype, "search", null);
__decorate([
    (0, common_1.Patch)('byId/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_rent_dto_1.UpdateRentDto]),
    __metadata("design:returntype", void 0)
], RentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('byId/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RentController.prototype, "remove", null);
exports.RentController = RentController = __decorate([
    (0, swagger_1.ApiTags)('Rent'),
    (0, common_1.Controller)('rent'),
    __metadata("design:paramtypes", [rent_service_1.RentService])
], RentController);
//# sourceMappingURL=rent.controller.js.map