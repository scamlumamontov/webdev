import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumdetailComponent } from './albumdetail.component';

describe('AlbumdetailComponent', () => {
  let component: AlbumdetailComponent;
  let fixture: ComponentFixture<AlbumdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumdetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
