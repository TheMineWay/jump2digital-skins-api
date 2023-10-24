import {
  AllowNull,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { uuid } from "../../types/generic/uuid.type";
import { UserSkinEntity } from "./user-skin.entity";

export interface UserAttributes {
  id: uuid;

  name: string;
  lastName: string;
  nickname: string;
  password: string;
  email: string;

  // Associations
  skins?: UserSkinEntity[];
}

export interface UserCreateAttributes
  extends Omit<UserAttributes, "id" | "userSkin"> {}

@Table({
  tableName: "users",
  paranoid: true, // Allow soft deletes
})
export class UserEntity
  extends Model<UserAttributes, UserCreateAttributes>
  implements UserAttributes
{
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: uuid;

  @AllowNull(false)
  @Column(DataType.STRING(32))
  name: string;

  @AllowNull(false)
  @Column(DataType.STRING(64))
  lastName: string;

  @AllowNull(false)
  @Column(DataType.STRING(16))
  nickname: string;

  @AllowNull(false)
  @Column(DataType.STRING(128))
  email: string;

  @AllowNull(false)
  @Column(DataType.STRING(256))
  password: string; // Hashed password (with salt)

  // Associations

  @HasMany(() => UserSkinEntity)
  skins?: UserSkinEntity[];
}
