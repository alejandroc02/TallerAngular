/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeireListComponent } from './seire-list.component';

describe('SeireListComponent', () => {
  let component: SeireListComponent;
  let fixture: ComponentFixture<SeireListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeireListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeireListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
