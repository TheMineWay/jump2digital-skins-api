import { Module } from "@nestjs/common";
import { SkinsModule } from "./api/skins/skins.module";
import { DatabaseModule } from "./database/database.module";
import { ThrottlerGuard, ThrottlerModule } from "@nestjs/throttler";
import { APP_GUARD } from "@nestjs/core";
import { AuthModule } from "./api/auth/auth.module";
import { AuthGuard } from "./guards/auth/auth.guard";

@Module({
  imports: [
    DatabaseModule,
    ThrottlerModule.forRoot([
      {
        ttl: 30000, // 30 seconds
        limit: 60, // 60 requests
      },
    ]),
    SkinsModule,
    AuthModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
