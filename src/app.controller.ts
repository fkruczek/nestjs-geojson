import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import wkx from 'wkx';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // get with query params lng and lat
  // return a geojson object
  @Get()
  async getHello(@Query('lng') lng: number, @Query('lat') lat: number) {
    return await this.appService.getHello(lng, lat);
  }
}
