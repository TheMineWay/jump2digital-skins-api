import { Module } from "@nestjs/common";
import { SkinsController } from "./skins.controller";
import { SkinsService } from "./skins.service";
import { UserSkinsService } from "./user-skins/user-skins.service";
import { UserSkinsRepository } from "../../database/repository/user-skins.repository";
import { SkinsRepository } from "../../database/repository/skins.repository";

@Module({
  controllers: [SkinsController],
  providers: [
    SkinsService,
    UserSkinsService,
    UserSkinsRepository,
    SkinsRepository,
  ],
})
export class SkinsModule {}
