import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPanelHomeComponent } from './user-panel-home.component';

describe('UserPanelHomeComponent', () => {
  let component: UserPanelHomeComponent;
  let fixture: ComponentFixture<UserPanelHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPanelHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPanelHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
