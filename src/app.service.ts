import { Injectable } from '@nestjs/common';
import { WkxService } from './wkx/wkx.service';
@Injectable()
export class AppService {
  constructor(private readonly wkxService: WkxService) {}

  async getHello(lng: number, lat: number) {
    return await this.wkxService.getHello(lng, lat);
  }
}
