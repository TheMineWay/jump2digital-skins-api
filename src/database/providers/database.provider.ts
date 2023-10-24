import { Sequelize } from "sequelize-typescript";
import { getEnv } from "../../config/env";
import { UserSkinEntity } from "../entities/user-skin.entity";
import { Logger } from "@nestjs/common";

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
        logging: Logger.log,
      });
      await sequelize.authenticate();
      sequelize.addModels([UserSkinEntity]);
      await sequelize.sync({ alter: true });
      return sequelize;
    },
  },
];
