import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderbandComponent } from './headerband.component';

describe('HeaderbandComponent', () => {
  let component: HeaderbandComponent;
  let fixture: ComponentFixture<HeaderbandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderbandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderbandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
