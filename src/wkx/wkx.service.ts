import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { wkx } from './wkx.provider';

@Injectable()
export class WkxService {
  constructor(
    @Inject(wkx) private wkx: any,
    private readonly httpService: HttpService,
  ) {}

  async getHello(lng: number, lat: number) {
    const { data } = await firstValueFrom(
      this.httpService.get<string>(
        `https://uldk.gugik.gov.pl/?request=GetParcelByXY&xy=${lng},${lat},4326&result=geom_wkb,teryt,id,function,voivodeship,county,commune,region,parcel`,
      ),
    );
    const wkbString = data.slice(1);
    const noWhiteChars = wkbString.replace(/\s/g, '');
    const wkbBuffer = Buffer.from(noWhiteChars, 'hex');
    const geometry = this.wkx.Geometry.parse(wkbBuffer);
    return geometry.toGeoJSON();
  }
}
