/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Step_by_stepComponent } from './step_by_step.component';

describe('Step_by_stepComponent', () => {
  let component: Step_by_stepComponent;
  let fixture: ComponentFixture<Step_by_stepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step_by_stepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step_by_stepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
