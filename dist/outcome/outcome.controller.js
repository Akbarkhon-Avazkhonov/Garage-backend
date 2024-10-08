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
exports.OutcomeController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const outcome_service_1 = require("./outcome.service");
const create_outcome_dto_1 = require("./dto/create-outcome.dto");
const update_outcome_dto_1 = require("./dto/update-outcome.dto");
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("@nestjs/swagger");
const admin_guard_1 = require("../admin/admin.guard");
let OutcomeController = class OutcomeController {
    constructor(outcomeService) {
        this.outcomeService = outcomeService;
    }
    create(createOutcomeDto) {
        return this.outcomeService.create(createOutcomeDto);
    }
    findAll() {
        return this.outcomeService.findAll();
    }
    findSome(take, skip) {
        return this.outcomeService.findSome(+take, +skip);
    }
    findOne(id) {
        return this.outcomeService.findOne(+id);
    }
    update(id, updateOutcomeDto) {
        return this.outcomeService.update(+id, updateOutcomeDto);
    }
    remove(id) {
        return this.outcomeService.remove(+id);
    }
};
exports.OutcomeController = OutcomeController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_outcome_dto_1.CreateOutcomeDto]),
    __metadata("design:returntype", void 0)
], OutcomeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OutcomeController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find some outcomes' }),
    (0, swagger_1.ApiParam)({ name: 'take', required: true, type: 'number' }),
    (0, swagger_1.ApiParam)({ name: 'skip', required: true, type: 'number' }),
    (0, common_1.Get)('some'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('take')),
    __param(1, (0, common_1.Param)('skip')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], OutcomeController.prototype, "findSome", null);
__decorate([
    (0, common_1.Get)('byId/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OutcomeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('byId/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_outcome_dto_1.UpdateOutcomeDto]),
    __metadata("design:returntype", void 0)
], OutcomeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('byId/:id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OutcomeController.prototype, "remove", null);
exports.OutcomeController = OutcomeController = __decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, swagger_2.ApiBearerAuth)(),
    (0, swagger_2.ApiTags)('Outcome'),
    (0, common_1.Controller)('outcome'),
    __metadata("design:paramtypes", [outcome_service_1.OutcomeService])
], OutcomeController);
//# sourceMappingURL=outcome.controller.js.map