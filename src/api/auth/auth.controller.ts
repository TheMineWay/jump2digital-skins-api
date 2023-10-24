import { Body, Controller, Post } from "@nestjs/common";
import { Throttle } from "@nestjs/throttler";
import { LoginDTO } from "../../dtos/api/auth/login.dto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Restrict requests (5 per minute)
  @Throttle({ default: { limit: 5, ttl: 60000 } })
  @Post("login")
  async login(@Body() { nickname, password }: LoginDTO) {
    return await this.authService.login(nickname, password);
  }
}
