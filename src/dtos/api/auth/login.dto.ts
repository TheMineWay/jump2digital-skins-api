import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, MinLength } from "class-validator";

export class LoginDTO {
  @ApiProperty()
  @IsString()
  @MinLength(5) // Nicknames have a minimum length
  @MaxLength(16)
  nickname: string;

  @ApiProperty()
  @IsString()
  @MinLength(5)
  @MaxLength(64)
  password: string;
}
