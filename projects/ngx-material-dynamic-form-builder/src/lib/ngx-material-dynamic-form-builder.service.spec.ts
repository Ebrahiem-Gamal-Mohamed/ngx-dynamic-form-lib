import { TestBed } from '@angular/core/testing';

import { NgxMaterialDynamicFormBuilderService } from './ngx-material-dynamic-form-builder.service';

describe('NgxMaterialDynamicFormBuilderService', () => {
  let service: NgxMaterialDynamicFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMaterialDynamicFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
