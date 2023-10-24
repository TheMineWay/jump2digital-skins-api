import {
  AllowNull,
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { uuid } from "../../types/generic/uuid.type";

export interface UserSkinAttributes {
  id: uuid;

  userId: uuid;
  color: string;
}
export interface UserSkinCreateAttributes
  extends Omit<UserSkinAttributes, "id"> {}

@Table({
  tableName: "userSkins",
})
export class UserSkinEntity
  extends Model<UserSkinAttributes, UserSkinCreateAttributes>
  implements UserSkinAttributes
{
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: uuid;

  @AllowNull(false)
  @Column(DataType.UUID)
  userId: uuid;

  @AllowNull(false)
  @Column(DataType.STRING(6))
  color: string;
}
