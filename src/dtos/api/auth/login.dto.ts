import { IsString, MaxLength, MinLength } from "class-validator";

export class LoginDTO {
  @IsString()
  @MinLength(5) // Nicknames have a minimum length
  @MaxLength(16)
  nickname: string;

  @IsString()
  @MinLength(5)
  @MaxLength(64)
  password: string;
}
