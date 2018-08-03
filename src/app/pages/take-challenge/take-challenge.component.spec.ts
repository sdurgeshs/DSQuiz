import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeChallengeComponent } from './take-challenge.component';

describe('TakeChallengeComponent', () => {
  let component: TakeChallengeComponent;
  let fixture: ComponentFixture<TakeChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeChallengeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
