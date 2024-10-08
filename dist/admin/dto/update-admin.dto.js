"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdminDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_admin_dto_1 = require("./create-admin.dto");
class UpdateAdminDto extends (0, swagger_1.PartialType)(create_admin_dto_1.CreateAdminDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateAdminDto = UpdateAdminDto;
//# sourceMappingURL=update-admin.dto.js.map