/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LeatherProductsComponent } from './leather-products.component';

describe('LeatherProductsComponent', () => {
  let component: LeatherProductsComponent;
  let fixture: ComponentFixture<LeatherProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeatherProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeatherProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
