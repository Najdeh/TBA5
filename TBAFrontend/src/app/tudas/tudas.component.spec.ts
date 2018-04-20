import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TudasComponent } from './tudas.component';

describe('TudasComponent', () => {
  let component: TudasComponent;
  let fixture: ComponentFixture<TudasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TudasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TudasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
