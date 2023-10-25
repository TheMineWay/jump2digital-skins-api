import { Sequelize } from "sequelize-typescript";
import { getEnv } from "../../config/env";
import { UserSkinEntity } from "../entities/user-skin.entity";
import { Logger } from "@nestjs/common";
import { UserEntity } from "../entities/user.entity";

export const databaseProviders = [
  {
    provide: "SEQUELIZE",
    useFactory: async () => {
      const {
        database: { host, username, password, name: database, port },
      } = getEnv();

      const sequelize = new Sequelize({
        dialect: "mysql",
        host,
        port,
        username,
        password,
        database,
        logging: console.log,
      });
      await sequelize.authenticate();
      sequelize.addModels([UserSkinEntity, UserEntity]);
      await sequelize.sync({ alter: true });
      return sequelize;
    },
  },
];
