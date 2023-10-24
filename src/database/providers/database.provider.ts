import { Sequelize } from "sequelize-typescript";
import { getEnv } from "../../config/env";
import { UserSkinEntity } from "../entities/user-skin.entity";

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
      });
      sequelize.addModels([UserSkinEntity]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
