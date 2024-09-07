"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOutcomeDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_outcome_dto_1 = require("./create-outcome.dto");
class UpdateOutcomeDto extends (0, swagger_1.PartialType)(create_outcome_dto_1.CreateOutcomeDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateOutcomeDto = UpdateOutcomeDto;
//# sourceMappingURL=update-outcome.dto.js.map