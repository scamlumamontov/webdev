import { TestBed } from '@angular/core/testing';

import { AlbumserService } from './albumser.service';

describe('AlbumserService', () => {
  let service: AlbumserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
