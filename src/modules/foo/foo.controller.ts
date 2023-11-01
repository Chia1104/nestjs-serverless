import { Controller, Get, Query } from '@nestjs/common';
import { FooService } from './foo.service';

@Controller('/foo')
export class FooController {
  constructor(private readonly fooService: FooService) {}

  @Get('/')
  getHello(@Query() query: {
    name?: string;
  }): string {
    return this.fooService.getHello(query.name);
  }
}
