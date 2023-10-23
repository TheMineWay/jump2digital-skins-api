import { Injectable } from "@nestjs/common";
import { uuid } from "../../types/generic/uuid.type";

@Injectable()
export class SkinsService {
  async getAvailableSkins() {}
  async buySkin(skinId: uuid, userId: uuid) {}
}
