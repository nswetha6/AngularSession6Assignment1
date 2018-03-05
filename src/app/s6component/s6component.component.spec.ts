import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S6componentComponent } from './s6component.component';

describe('S6componentComponent', () => {
  let component: S6componentComponent;
  let fixture: ComponentFixture<S6componentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S6componentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S6componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
