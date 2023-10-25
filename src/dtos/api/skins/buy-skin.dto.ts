import { IsUUID } from "class-validator";
import { uuid } from "../../../types/generic/uuid.type";
import { ApiProperty } from "@nestjs/swagger";

export class BuySkinDTO {
  @ApiProperty()
  @IsUUID("4")
  skinId: uuid;
}
