"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateIncomeDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_income_dto_1 = require("./create-income.dto");
class UpdateIncomeDto extends (0, swagger_1.PartialType)(create_income_dto_1.CreateIncomeDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateIncomeDto = UpdateIncomeDto;
//# sourceMappingURL=update-income.dto.js.map