import { MapViewModule } from './map-view.module';

describe('MapViewModule', () => {
  let mapViewModule: MapViewModule;

  beforeEach(() => {
    mapViewModule = new MapViewModule();
  });

  it('should create an instance', () => {
    expect(mapViewModule).toBeTruthy();
  });
});
