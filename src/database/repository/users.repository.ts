import { Injectable } from "@nestjs/common";
import { UserEntity } from "../entities/user.entity";

@Injectable()
export class UsersRepository {
  async findUserByNickname(nickname: string) {
    return await UserEntity.findOne({
      where: {
        nickname,
      },
    });
  }
}
