import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumscompComponent } from './albumscomp.component';

describe('AlbumscompComponent', () => {
  let component: AlbumscompComponent;
  let fixture: ComponentFixture<AlbumscompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumscompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
