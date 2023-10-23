import { Sequelize } from "sequelize-typescript";
import { getEnv } from "../../config/env";

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
      sequelize.addModels([]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
