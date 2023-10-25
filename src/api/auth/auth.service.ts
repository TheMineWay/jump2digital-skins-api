import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { UsersService } from "../users/users.service";
import {
  compareHashWithSalt,
  hashWithSalt,
} from "../../utils/cryptography/cryptography.util";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async login(nickname: string, password: string) {
    const user = await this.usersService.getUserByNickname(nickname);
    if (!user) throw new NotFoundException(); // The user does not exist in the database

    if (!compareHashWithSalt(user.getDataValue("password"), password))
      throw new UnauthorizedException(); // Password is

    // User is allowed to be authenticated
    const { password: _, ...userData } = user.get();
    return this.jwtService.sign(userData);
  }
}
