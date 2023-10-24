import { Injectable } from "@nestjs/common";
import { uuid } from "../../types/generic/uuid.type";
import skins from "../../database/json/skins/skins.json";

@Injectable()
export class SkinsService {
  async getAvailableSkins() {
    return skins;
  }
  async buySkin(skinId: uuid, userId: uuid) {}
}
