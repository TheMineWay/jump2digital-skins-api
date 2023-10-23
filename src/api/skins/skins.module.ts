import { Module } from "@nestjs/common";
import { SkinsController } from "./skins.controller";
import { SkinsService } from "./skins.service";
import { UserSkinsService } from "./user-skins/user-skins.service";

@Module({
  controllers: [SkinsController],
  providers: [SkinsService, UserSkinsService],
})
export class SkinsModule {}
