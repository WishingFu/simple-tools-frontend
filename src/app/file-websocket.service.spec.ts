import { TestBed } from '@angular/core/testing';

import { FileWebsocketService } from './file-websocket.service';

describe('FileWebsocketService', () => {
  let service: FileWebsocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileWebsocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
