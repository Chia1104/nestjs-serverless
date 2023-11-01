import { Injectable } from "@nestjs/common";

@Injectable()
export class FooService {
  getHello(name = "World"): string {
    return `Hello ${name}!`;
  }
}
