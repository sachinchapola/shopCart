import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceOrderPopComponent } from './place-order-pop.component';

describe('PlaceOrderPopComponent', () => {
  let component: PlaceOrderPopComponent;
  let fixture: ComponentFixture<PlaceOrderPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceOrderPopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaceOrderPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
