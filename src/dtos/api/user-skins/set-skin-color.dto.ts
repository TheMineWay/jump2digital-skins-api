import { IsHexColor } from "class-validator";

export class SetSkinColorDTO {
  @IsHexColor()
  color: string;
}
