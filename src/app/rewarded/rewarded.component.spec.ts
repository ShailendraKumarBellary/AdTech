import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardedComponent } from './rewarded.component';

describe('RewardedComponent', () => {
  let component: RewardedComponent;
  let fixture: ComponentFixture<RewardedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RewardedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
