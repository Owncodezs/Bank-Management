import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpayerComponent } from './addpayer.component';

describe('AddpayerComponent', () => {
  let component: AddpayerComponent;
  let fixture: ComponentFixture<AddpayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
