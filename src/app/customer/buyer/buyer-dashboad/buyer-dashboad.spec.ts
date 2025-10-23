import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerDashboad } from './buyer-dashboad';

describe('BuyerDashboad', () => {
  let component: BuyerDashboad;
  let fixture: ComponentFixture<BuyerDashboad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerDashboad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerDashboad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
