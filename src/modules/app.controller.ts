import { Controller, Get, Query } from '@nestjs/common';

@Controller()
export class AppController {

  @Get()
  getHello(@Query() query: {
    name?: string;
  }): string {
    return `Hello ${query.name || 'World'}!`
  }
}
