import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ApiModule } from './modules/http/api/api.module';

@Module({
  imports: [ApiModule],
  controllers: [AppController],
})
export class AppModule {}
