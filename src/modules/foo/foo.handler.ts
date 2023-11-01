import { HttpStatus } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FooModule } from './foo.module';
import { FooService } from './foo.service';

export const handler = async (
  req: any,
  res: any,
) => {
  const fooContext = await NestFactory.createApplicationContext(FooModule);
  const fooService = fooContext.get(FooService);

  return {
    body: fooService.getHello(),
    statusCode: HttpStatus.OK,
  };
};