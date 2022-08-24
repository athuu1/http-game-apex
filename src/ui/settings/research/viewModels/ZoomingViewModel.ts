import * as ui from 'ui';

export class ZoomingViewModel {
  readonly enable = new ui.BoolStorage('settings.zooming.enable', true);
}