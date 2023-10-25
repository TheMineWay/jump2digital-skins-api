import { UserAttributes } from "../../../database/entities/user.entity";

export interface BearerModel extends Omit<UserAttributes, "password"> {
  iat: number;
  exp: number;
}
