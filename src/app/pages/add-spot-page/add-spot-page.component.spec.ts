import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpotPageComponent } from './add-spot-page.component';

describe('AddSpotPageComponent', () => {
  let component: AddSpotPageComponent;
  let fixture: ComponentFixture<AddSpotPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSpotPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
