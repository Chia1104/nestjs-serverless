import { NestFactory } from "@nestjs/core";
import serverlessExpress from "@vendia/serverless-express";
import { Context, Handler } from "aws-lambda";
import { AppModule } from "./modules/app.module";

let cachedServer: Handler;

async function bootstrap() {
  if (!cachedServer) {
    const app = await NestFactory.create(AppModule);
    await app.init();

    const expressApp = app.getHttpAdapter().getInstance();

    cachedServer = serverlessExpress({ app: expressApp });
  }

  return cachedServer;
}

export const handler = async (event: any, context: Context, callback: any) => {
  const server = await bootstrap();
  return server(event, context, callback);
};
