import { Injectable } from "@nestjs/common";
import { UsersRepository } from "../../database/repository/users.repository";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserByNickname(nickname: string) {
    return await this.usersRepository.findUserByNickname(nickname);
  }
}
