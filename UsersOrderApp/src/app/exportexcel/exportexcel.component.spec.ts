import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportexcelComponent } from './exportexcel.component';

describe('ExportexcelComponent', () => {
  let component: ExportexcelComponent;
  let fixture: ComponentFixture<ExportexcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportexcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
