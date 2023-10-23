import { Module } from "@nestjs/common";
import { SkinsModule } from "./api/skins/skins.module";

@Module({
  imports: [SkinsModule],
})
export class AppModule {}
