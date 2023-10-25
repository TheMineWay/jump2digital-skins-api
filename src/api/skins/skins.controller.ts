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
import { User } from "../../decorators/auth/user.decorator";
import { BearerModel } from "../../models/auth/token/bearer.model";
import { BuySkinDTO } from "../../dtos/api/skins/buy-skin.dto";
import { ApiBearerAuth, ApiSecurity, ApiTags } from "@nestjs/swagger";
import { Public } from "../../decorators/auth/public.decorator";

@ApiTags("Skins")
@ApiBearerAuth()
@Controller("skins")
export class SkinsController {
  constructor(
    private readonly skinsService: SkinsService,
    private readonly userSkinsService: UserSkinsService
  ) {}

  @Public()
  @Get("available")
  async getAvailableSkins() {
    return await this.skinsService.getAvailableSkins();
  }

  @Post("buy")
  async buySkin(@User() user: BearerModel, @Body() { skinId }: BuySkinDTO) {
    return await this.skinsService.buySkin(skinId, user.id);
  }

  @Get("myskins")
  async getMySkins(@User() user: BearerModel) {
    return await this.userSkinsService.getSkinsByUserId(user.id);
  }

  @Put("color")
  async setSkinColor(
    @Body() { color, userSkinId }: SetSkinColorDTO,
    @User() user: BearerModel
  ) {
    // UserId is used to confirm the requester is allowed to modify that skin
    await this.userSkinsService.setUserSkinColorBySkinAndUserId(
      userSkinId,
      user.id,
      color
    );
  }

  @Delete("delete/:userSkinId")
  async deleteSkin(
    @Param("userSkinId", new ParseUUIDPipe({ version: "4" })) userSkinId: uuid,
    @User() user: BearerModel
  ) {
    // UserId is used to confirm the requester is allowed to delete that skin
    return await this.userSkinsService.deleteUserSkinBySkinIdAndUserId(
      userSkinId,
      user.id
    );
  }

  @Get("getskin/:userSkinId")
  async getSkinById(
    @Param("userSkinId", new ParseUUIDPipe({ version: "4" })) userSkinId: uuid,
    @User() user: BearerModel
  ) {
    // UserId is used to confirm the requester is allowed to access that skin
    return await this.userSkinsService.getUserSkinBySkinAndUserId(
      userSkinId,
      user.id
    );
  }
}
