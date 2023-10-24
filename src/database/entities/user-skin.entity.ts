import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { uuid } from "../../types/generic/uuid.type";
import { UserEntity } from "./user.entity";

export interface UserSkinAttributes {
  id: uuid;

  color: string;

  // Associations
  userId: uuid;
  user?: UserEntity;
}
export interface UserSkinCreateAttributes
  extends Omit<UserSkinAttributes, "id" | "user"> {}

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
  @Column(DataType.STRING(6))
  color: string;

  // Associations

  @ForeignKey(() => UserEntity)
  @AllowNull(false)
  @Column(DataType.UUID)
  userId: uuid;

  @BelongsTo(() => UserEntity)
  user?: UserEntity;
}
