import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

let cachedServer: any;

async function bootstrap() {
  if (!cachedServer) {
    const app = await NestFactory.create(AppModule);
    await app.init();

    const expressApp = app.getHttpAdapter().getInstance();

    cachedServer = expressApp;
  }

  return cachedServer;
}

export const handler = async (req: any, res: any) => {
  const server = await bootstrap();
  return server(req, res);
}
