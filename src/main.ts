import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();


//TODO: Miscroservices implementation
// async function bootstrap() {
//   const app = await NestFactory.createMicroservice<MicroserviceOptions>(UsersModule, {
//     transport: Transport.TCP,
//     options: {
//       host:'localhost',
//       port: 3001
//     }
//   });
//   // app.enableCors()
//   await app.listen();
//   console.log('User Service is listening at port 3001')
// }
// bootstrap();
