import 'reflect-metadata'; 
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Docker içinde dışarıdan erişilebilmesi için 0.0.0.0 şart
  await app.listen(4000, '0.0.0.0'); 
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

 