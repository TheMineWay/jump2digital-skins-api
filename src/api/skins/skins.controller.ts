import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from "@nestjs/common";
import { SkinsService } from "./skins.service";
import { uuid } from "../../types/generic/uuid.type";
import { UserSkinsService } from "./user-skins/user-skins.service";
import { SetSkinColorDTO } from "../../dtos/api/user-skins/set-skin-color.dto";

@Controller("skins")
export class SkinsController {
  constructor(
    private readonly skinsService: SkinsService,
    private readonly userSkinsService: UserSkinsService
  ) {}

  @Get("available")
  async getAvailableSkins() {
    return await this.skinsService.getAvailableSkins();
  }

  @Post("buy")
  async buySkin() {
    //return await this.skinsService.buySkin();
  }

  @Get("myskins")
  async getMySkins() {
    //return await this.userSkinsService.getUserSkinsByUserId();
  }

  @Put("color")
  async setSkinColor(@Body() { color }: SetSkinColorDTO) {
    // UserId is used to confirm the requester is allowed to modify that skin
    //return await this.userSkinsService.setUserSkinColorBySkinAndUserId();
  }

  @Delete("delete/:skinId")
  async deleteSkin(
    @Param("skinId", new ParseUUIDPipe({ version: "4" })) skinId: uuid
  ) {
    // UserId is used to confirm the requester is allowed to delete that skin
    //return await this.userSkinsService.deleteUserSkinBySkinIdAndUserId();
  }

  @Get("getskin/:skinId")
  async getSkinById(
    @Param("skinId", new ParseUUIDPipe({ version: "4" })) skinId: uuid
  ) {
    // UserId is used to confirm the requester is allowed to access that skin
    //return await this.userSkinsService.getUserSkinBySkinAndUserId();
  }
}
