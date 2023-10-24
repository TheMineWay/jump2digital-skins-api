import { Injectable } from "@nestjs/common";
import { uuid } from "../../../types/generic/uuid.type";
import { UserSkinsRepository } from "../../../database/repository/user-skins.repository";

@Injectable()
export class UserSkinsService {
  constructor(private readonly userSkinsRepository: UserSkinsRepository) {}

  async getSkinsByUserId(userId: uuid) {
    return await this.userSkinsRepository.findSkinsByUserId(userId);
  }
  async setUserSkinColorBySkinAndUserId(
    userSkinId: uuid,
    userId: uuid,
    color: string
  ) {
    return await this.userSkinsRepository.updateSkinBySkinIdAndUserId(
      userSkinId,
      userId,
      { color }
    );
  }
  async deleteUserSkinBySkinIdAndUserId(userSkinId: uuid, userId: uuid) {
    return await this.userSkinsRepository.deleteSkinBySkinIdAndUserId(
      userSkinId,
      userId
    );
  }
  async getUserSkinBySkinAndUserId(userSkinId: uuid, userId: uuid) {
    return await this.userSkinsRepository.findSkinBySkinIdAndUserId(
      userSkinId,
      userId
    );
  }
}
