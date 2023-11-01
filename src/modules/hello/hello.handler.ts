import { HttpStatus } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { HelloModule } from "./hello.module";
import { HelloService } from "./hello.service";

export const handler = async (req: any, res: any) => {
  const helloContext = await NestFactory.createApplicationContext(HelloModule);
  const helloService = helloContext.get(HelloService);

  return {
    body: helloService.getHello(),
    statusCode: HttpStatus.OK,
  };
};
