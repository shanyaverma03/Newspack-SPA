import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfavoriteslinkComponent } from './viewfavoriteslink.component';

describe('ViewfavoriteslinkComponent', () => {
  let component: ViewfavoriteslinkComponent;
  let fixture: ComponentFixture<ViewfavoriteslinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfavoriteslinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfavoriteslinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
