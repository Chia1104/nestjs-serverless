import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(@Query() query: {
    name?: string;
  }): string {
    return this.appService.getHello(query.name);
  }

  @Get('/test')
  getTest(@Query() query: {
    name?: string;
  }): string {
    return `Test ${query.name}!`;
  }
}
