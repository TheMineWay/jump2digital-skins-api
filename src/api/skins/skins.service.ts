import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { uuid } from "../../types/generic/uuid.type";
import { SkinsRepository } from "../../database/repository/skins.repository";
import { UserSkinsRepository } from "../../database/repository/user-skins.repository";

@Injectable()
export class SkinsService {
  constructor(
    private readonly skinsRepository: SkinsRepository,
    private readonly userSkinsRepository: UserSkinsRepository
  ) {}

  async getAvailableSkins() {
    return await this.skinsRepository.findAllSkins({ joinTypes: true });
  }
  async buySkin(skinId: uuid, userId: uuid) {
    const skin = await this.skinsRepository.findSkinById(skinId);
    if (!skin) throw new NotFoundException();

    const userSkin = await this.userSkinsRepository.findSkinBySkinIdAndUserId(
      skin.id,
      userId
    );

    if (userSkin !== null) {
      throw new BadRequestException({
        message: "You already purchased this skin",
      });
    }

    await this.userSkinsRepository.create({
      userId,
      skinId,
      color: skin.color,
    });
  }
}
