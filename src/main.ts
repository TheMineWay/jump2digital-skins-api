import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS (so the API can be accessed from any domain. This can be restricted if we want)
  app.enableCors();

  // Setup some HTTP security headers
  app.use(helmet());

  // Validate all incoming JSONs in order to prevent invalid data types or extra data injection
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // Setup documentation (using Open API standard)
  const config = new DocumentBuilder()
    .setTitle('Skins API')
    .setDescription('Skins API for the Jump2Digital Hackaton')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
