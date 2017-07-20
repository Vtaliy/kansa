import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBotomComponent } from './header-botom.component';

describe('HeaderBotomComponent', () => {
  let component: HeaderBotomComponent;
  let fixture: ComponentFixture<HeaderBotomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBotomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBotomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
