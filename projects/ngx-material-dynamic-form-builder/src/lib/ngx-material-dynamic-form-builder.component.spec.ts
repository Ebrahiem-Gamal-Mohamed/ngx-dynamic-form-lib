import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMaterialDynamicFormBuilderComponent } from './ngx-material-dynamic-form-builder.component';

describe('NgxMaterialDynamicFormBuilderComponent', () => {
  let component: NgxMaterialDynamicFormBuilderComponent;
  let fixture: ComponentFixture<NgxMaterialDynamicFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMaterialDynamicFormBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMaterialDynamicFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
