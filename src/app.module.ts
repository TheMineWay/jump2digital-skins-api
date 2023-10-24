import { Module } from "@nestjs/common";
import { SkinsModule } from "./api/skins/skins.module";
import { DatabaseModule } from "./database/database.module";

@Module({
  imports: [SkinsModule, DatabaseModule],
})
export class AppModule {}
