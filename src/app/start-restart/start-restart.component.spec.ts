import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartRestartComponent } from './start-restart.component';

describe('StartRestartComponent', () => {
  let component: StartRestartComponent;
  let fixture: ComponentFixture<StartRestartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartRestartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartRestartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
