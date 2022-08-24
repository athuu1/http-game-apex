import * as app from '.';

export class MainViewModel {
  readonly recoil = new app.RecoilViewModel();
  readonly zooming = new app.ZoomingViewModel();
}
