_(I did all comments and documentation in English as it is the standarized language)_

# Jump2Digital hackaton backend test

This is the backend developed as the access test for the Jump2Digital hackaton 2023.

## 0. Technologies

I decided to use [NodeJS 20]("https://nodejs.org/en") as the runtime environment. The application is fully dockerized, so it can be deployed and executed easily.
All the project is coded in TypeScript in order to keep the code strongly typified.

This project uses [NestJS]("https://nestjs.com") (a [express]("https://expressjs.com/") based framework) as the server framework. THis framework provides utilities that help developers make secure and escalable APIs faster.

### 0.0. Libraries

Some _npm_ libraries were used when developing the API. Here I list the more important ones:

- **[Sequelize]("https://sequelize.org/"):** a TypeScript ORM. Using this library all database entities (tables) are defined as JavaScript classes. Using those sefinitions, the server automatically creates all databse entities on startup (or modifies them to match the definition).
  Having this database mappings allows us to perform queries calling predefined methods that the library gives us.
  All the library is language agnostic so the project can be easily migrated to another database engine.
- **[Swagger]("https://swagger.io/"):** a JavaScript library that, following the [Open API]("https://www.openapis.org/") standard, automates endpoints documentation. It generates a web UI that lists all available endpoints and adds some information about them (requets method, body type, etc).
- **[Helmet]("https://helmetjs.github.io/"):** a header security library. It injects security headers in response headers. It helps to patch common header based vulnerabilities.
- **[class-validator]("https://github.com/typestack/class-validator#readme"):**: a library that allows payload validation. As JavaScript has no real datatypes we cannot trust types sent by the client. Using some decorators provided by this library we can map payloads, so sent data matches expected datatypes (if not, an error is thrown).
- **[Dotenv]("https://github.com/motdotla/dotenv#readme"):** a library used to read and load **.env** files.
