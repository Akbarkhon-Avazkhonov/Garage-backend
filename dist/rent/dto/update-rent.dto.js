"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRentDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_rent_dto_1 = require("./create-rent.dto");
class UpdateRentDto extends (0, swagger_1.PartialType)(create_rent_dto_1.CreateRentDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateRentDto = UpdateRentDto;
//# sourceMappingURL=update-rent.dto.js.map