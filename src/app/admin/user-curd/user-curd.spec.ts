import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCurd } from './user-curd';

describe('UserCurd', () => {
  let component: UserCurd;
  let fixture: ComponentFixture<UserCurd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCurd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCurd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
