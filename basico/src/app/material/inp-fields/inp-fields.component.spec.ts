import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InpFieldsComponent } from './inp-fields.component';

describe('InpFieldsComponent', () => {
  let component: InpFieldsComponent;
  let fixture: ComponentFixture<InpFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InpFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InpFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
