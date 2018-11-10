import { ListViewModule } from './list-view.module';

describe('ListViewModule', () => {
  let listViewModule: ListViewModule;

  beforeEach(() => {
    listViewModule = new ListViewModule();
  });

  it('should create an instance', () => {
    expect(listViewModule).toBeTruthy();
  });
});
