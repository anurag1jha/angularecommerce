import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninSignup } from './signin-signup';

describe('SigninSignup', () => {
  let component: SigninSignup;
  let fixture: ComponentFixture<SigninSignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninSignup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninSignup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
