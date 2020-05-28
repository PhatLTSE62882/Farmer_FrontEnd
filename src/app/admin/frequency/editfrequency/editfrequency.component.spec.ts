import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfrequencyComponent } from './editfrequency.component';

describe('EditfrequencyComponent', () => {
  let component: EditfrequencyComponent;
  let fixture: ComponentFixture<EditfrequencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditfrequencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfrequencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
