import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { wkxProvider } from './wkx.provider';
import { WkxService } from './wkx.service';

@Module({
  imports: [HttpModule],
  providers: [wkxProvider, WkxService],
  exports: [wkxProvider],
})
export class wkxModule {}
