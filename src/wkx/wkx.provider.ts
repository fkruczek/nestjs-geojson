import { Provider } from '@nestjs/common';
import * as wkxLib from 'wkx';
export const wkx = 'lib:wkx';

export const wkxProvider: Provider<any> = {
  provide: wkx,
  useValue: wkxLib,
};
