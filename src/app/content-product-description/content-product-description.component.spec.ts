import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProductDescriptionComponent } from './content-product-description.component';

describe('ContentProductDescriptionComponent', () => {
  let component: ContentProductDescriptionComponent;
  let fixture: ComponentFixture<ContentProductDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentProductDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProductDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
