import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPopComponent } from './buy-pop.component';

describe('BuyPopComponent', () => {
  let component: BuyPopComponent;
  let fixture: ComponentFixture<BuyPopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyPopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
