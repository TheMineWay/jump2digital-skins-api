import { Module } from "@nestjs/common";
import { SkinsController } from "./skins.controller";
import { SkinsService } from "./skins.service";
import { UserSkinsService } from "./user-skins/user-skins.service";
import { UserSkinsRepository } from "../../database/repository/user-skins.repository";

@Module({
  controllers: [SkinsController],
  providers: [SkinsService, UserSkinsService, UserSkinsRepository],
})
export class SkinsModule {}
