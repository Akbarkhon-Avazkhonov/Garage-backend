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
exports.MonitoringController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const monitoring_service_1 = require("./monitoring.service");
const swagger_1 = require("@nestjs/swagger");
let MonitoringController = class MonitoringController {
    constructor(monitoringService) {
        this.monitoringService = monitoringService;
    }
    findRentsByMonth(year, month) {
        return this.monitoringService.findRentsByMonth(+year, +month);
    }
    findIncomeByMonth(year, month) {
        return this.monitoringService.findIncomeByMonth(+year, +month);
    }
    findIncomeByPersentage() {
        return this.monitoringService.findIncomeByPersentage();
    }
    findHistoryByMonth(year, month) {
        return this.monitoringService.findHistoryByMonth(+year, +month);
    }
};
exports.MonitoringController = MonitoringController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: ' Rents count for month ' }),
    (0, common_1.Get)('rents/:year/:month'),
    openapi.ApiResponse({ status: 200, type: Number }),
    __param(0, (0, common_1.Param)('year')),
    __param(1, (0, common_1.Param)('month')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], MonitoringController.prototype, "findRentsByMonth", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Sum for month ' }),
    (0, common_1.Get)('sum/:year/:month'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('year')),
    __param(1, (0, common_1.Param)('month')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], MonitoringController.prototype, "findIncomeByMonth", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Owners income or real balance  ' }),
    (0, common_1.Get)('ownersIncome'),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MonitoringController.prototype, "findIncomeByPersentage", null);
__decorate([
    (0, common_1.Get)('history/:year/:month'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('year')),
    __param(1, (0, common_1.Param)('month')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], MonitoringController.prototype, "findHistoryByMonth", null);
exports.MonitoringController = MonitoringController = __decorate([
    (0, swagger_1.ApiTags)('Monitoring'),
    (0, common_1.Controller)('monitoring'),
    __metadata("design:paramtypes", [monitoring_service_1.MonitoringService])
], MonitoringController);
//# sourceMappingURL=monitoring.controller.js.map