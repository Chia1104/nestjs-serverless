import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  getHello(name = 'World'): string {
    return `Hello ${name}!`;
  }
}
