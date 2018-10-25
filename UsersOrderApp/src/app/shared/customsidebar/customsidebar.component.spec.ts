import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomsidebarComponent } from './customsidebar.component';

describe('CustomsidebarComponent', () => {
  let component: CustomsidebarComponent;
  let fixture: ComponentFixture<CustomsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
