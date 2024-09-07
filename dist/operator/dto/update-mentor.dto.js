"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMentorDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_mentor_dto_1 = require("./create-mentor.dto");
class UpdateMentorDto extends (0, swagger_1.PartialType)(create_mentor_dto_1.CreateMentorDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateMentorDto = UpdateMentorDto;
//# sourceMappingURL=update-mentor.dto.js.map