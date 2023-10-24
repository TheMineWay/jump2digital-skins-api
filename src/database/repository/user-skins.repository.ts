import { Injectable } from "@nestjs/common";
import { uuid } from "../../types/generic/uuid.type";
import {
  UserSkinCreateAttributes,
  UserSkinEntity,
} from "../entities/user-skin.entity";

@Injectable()
export class UserSkinsRepository {
  async findSkinById(skinId: uuid) {
    return await UserSkinEntity.findByPk(skinId);
  }

  async findSkinsByUserId(userId: uuid) {
    return await UserSkinEntity.findAll({
      where: {
        userId,
      },
    });
  }

  async findSkinBySkinIdAndUserId(skinId: uuid, userId: uuid) {
    return await UserSkinEntity.findOne({
      where: {
        id: skinId,
        userId,
      },
    });
  }

  async deleteSkinBySkinIdAndUserId(skinId: uuid, userId: uuid) {
    return await UserSkinEntity.destroy({
      where: {
        id: skinId,
        userId,
      },
    });
  }

  async updateSkinBySkinIdAndUserId(
    skinId: uuid,
    userId: uuid,
    userSkin: Partial<Omit<UserSkinCreateAttributes, "userId">>
  ) {
    return await UserSkinEntity.update(userSkin, {
      where: {
        id: skinId,
        userId,
      },
    });
  }
}
