import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { wkxModule } from './wkx/wkx.module';
import { WkxService } from './wkx/wkx.service';

@Module({
  imports: [wkxModule, HttpModule],
  controllers: [AppController],
  providers: [AppService, WkxService],
})
export class AppModule {}
