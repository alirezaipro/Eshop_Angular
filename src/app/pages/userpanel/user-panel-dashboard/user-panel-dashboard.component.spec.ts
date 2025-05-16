import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPanelDashboardComponent } from './user-panel-dashboard.component';

describe('UserPanelDashboardComponent', () => {
  let component: UserPanelDashboardComponent;
  let fixture: ComponentFixture<UserPanelDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPanelDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPanelDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
