import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCompComponent } from './global-comp.component';

describe('GlobalCompComponent', () => {
  let component: GlobalCompComponent;
  let fixture: ComponentFixture<GlobalCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
