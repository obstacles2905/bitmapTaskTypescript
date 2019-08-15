import { Module } from '@nestjs/common';
import { BitmapController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [BitmapController],
  providers: [AppService],
})
export class AppModule {}
