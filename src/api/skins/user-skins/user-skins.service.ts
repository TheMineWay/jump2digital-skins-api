import { Injectable } from "@nestjs/common";
import { uuid } from "../../../types/generic/uuid.type";
import { UserSkinsRepository } from "../../../database/repository/user-skins.repository";
import { SkinsRepository } from "../../../database/repository/skins.repository";

@Injectable()
export class UserSkinsService {
  constructor(
    private readonly userSkinsRepository: UserSkinsRepository,
    private readonly skinsRepository: SkinsRepository
  ) {}

  async getSkinsByUserId(userId: uuid) {
    const userSkins = await this.userSkinsRepository.findSkinsByUserId(userId);

    // Join with skinTypes (SQL JOIN is more efficient than joining a JSON file)
    return await Promise.all(
      userSkins.map(async (userSkin) => ({
        ...userSkin.get(),
        skin: await this.skinsRepository.findSkinById(userSkin.skinId, {
          joinTypes: true,
        }),
      }))
    );
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
    const userSkin =
      await this.userSkinsRepository.findSkinByUserSkinIdAndUserId(
        userSkinId,
        userId
      );

    // Join with skinTypes (SQL JOIN is more efficient than joining a JSON file)
    return {
      ...userSkin.get(),
      skin: await this.skinsRepository.findSkinById(userSkin.skinId, {
        joinTypes: true,
      }),
    };
  }
}
