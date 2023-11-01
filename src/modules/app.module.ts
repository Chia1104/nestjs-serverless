import { Module } from "@nestjs/common";
import { HelloModule } from "./hello/hello.module";
import { FooModule } from "./foo/foo.module";
import { AppController } from "./app.controller";

@Module({
  imports: [HelloModule, FooModule],
  controllers: [AppController],
})
export class AppModule {}
