import { Injectable } from "@nestjs/common";
import { uuid } from "../../types/generic/uuid.type";
import { SkinModel } from "../../models/skin/skin.model";
import { SkinType } from "../../models/skin/skin-type.model";

// JSON database (based in static files)
import * as skins from "../json/skins/skins.json";
import * as skinTypes from "../json/skins/skin-types.json";

// This repository can be easily migrated to MYSQL as all functions are async.
@Injectable()
export class SkinsRepository {
  async findAllSkins(options?: { joinTypes?: boolean }) {
    const _skins = skins as SkinModel[];

    if (options?.joinTypes)
      return await Promise.all(
        _skins.map(async (skin) => ({
          ...skin,
          // Not very efficient. But SQL joins are faster
          type: await this.findSkinTypeById(skin.typeId),
        }))
      );

    return _skins;
  }

  async findSkinById(skinId: uuid, options?: { joinTypes?: boolean }) {
    return (await this.findAllSkins(options)).find(
      (skin) => skin.id === skinId
    );
  }

  // Types

  async findAllSkinTypes() {
    return skinTypes as SkinType[];
  }

  async findSkinTypeById(skinTypeId: uuid) {
    return (await this.findAllSkinTypes()).find(
      (type) => type.id === skinTypeId
    );
  }
}
