import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersModule } from "../users/users.module";
import { JwtModule } from "@nestjs/jwt";
import { getEnv } from "../../config/env";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      useFactory: () => {
        const {
          auth: { jwtSecret: secret },
        } = getEnv();

        return {
          global: true,
          secret,
          signOptions: { expiresIn: "30d" }, // 30d until token expires
        };
      },
    }),
  ],
  exports: [AuthService],
})
export class AuthModule {}
