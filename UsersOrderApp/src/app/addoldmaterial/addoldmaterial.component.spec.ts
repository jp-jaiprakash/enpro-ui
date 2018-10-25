import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoldmaterialComponent } from './addoldmaterial.component';

describe('AddoldmaterialComponent', () => {
  let component: AddoldmaterialComponent;
  let fixture: ComponentFixture<AddoldmaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoldmaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoldmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
