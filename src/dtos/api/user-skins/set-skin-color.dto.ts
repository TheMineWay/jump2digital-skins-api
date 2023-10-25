import { IsHexColor, IsUUID } from "class-validator";
import { uuid } from "../../../types/generic/uuid.type";
import { ApiProperty } from "@nestjs/swagger";

export class SetSkinColorDTO {
  @ApiProperty()
  @IsHexColor()
  color: string;

  @ApiProperty()
  @IsUUID("4")
  userSkinId: uuid;
}
