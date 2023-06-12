import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

export class NewBootStrap {
  async start() {
    const app = await NestFactory.create(AppModule);
    return app.listen(3000);
  }
}

const bootStrap = new NewBootStrap();
bootStrap.start();
