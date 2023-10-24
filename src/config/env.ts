const checkUndefined = <T>(
  value: string,
  allowUndefined: boolean,
  func: (value: string) => T
) => {
  if (!allowUndefined && value === undefined)
    throw new Error(
      "Cannot start application. Env file has missing variables."
    );

  if (value === undefined) return undefined;
  return func(value);
};

const toNumber = (value?: string, allowUndefined: boolean = false) =>
  checkUndefined(value, allowUndefined, (value) => +value);
const toString = (value?: string, allowUndefined: boolean = false) =>
  checkUndefined(value, allowUndefined, (value) => value);

export const getEnv = () => {
  const env: Partial<EnvRawFile> = process.env as Object;

  return {
    database: {
      password: toString(env.DATABASE_PASSWORD),
      username: toString(env.DATABASE_USERNAME),
      host: toString(env.DATABASE_HOST),
      name: toString(env.DATABASE_NAME, true) ?? "skins",
      port: toNumber(env.DATABASE_PASSWORD, true), // Default is managed by Sequelize
    },
    auth: {
      jwtSecret: toString(env.JWT_SECRET),
    },
  } as EnvFile;
};

interface EnvRawFile {
  // Database
  DATABASE_PASSWORD: string;
  DATABASE_USERNAME: string;
  DATABASE_HOST: string;
  DATABASE_NAME: string;
  DATABASE_PORT: string;

  // Auth
  JWT_SECRET: string;
}

interface EnvFile {
  database: {
    password: string;
    username: string;
    host: string;
    port?: number;
    name: string;
  };
  auth: {
    jwtSecret: string;
  };
}
