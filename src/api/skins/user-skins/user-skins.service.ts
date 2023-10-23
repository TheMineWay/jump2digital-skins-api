import { Injectable } from "@nestjs/common";
import { uuid } from "../../../types/generic/uuid.type";

@Injectable()
export class UserSkinsService {
  async getSkinsByUserId(userId: uuid) {}
  async setUserSkinColorBySkinAndUserId(
    userSkinId: uuid,
    userId: uuid,
    color: string
  ) {}
  async deleteUserSkinBySkinIdAndUserId(userSkinId: uuid, userId: uuid) {}
  async getUserSkinBySkinAndUserId(userSkinId: uuid, userId: uuid) {}
}
