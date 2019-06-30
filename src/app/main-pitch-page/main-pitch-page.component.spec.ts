import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPitchPageComponent } from './main-pitch-page.component';

describe('MainPitchPageComponent', () => {
  let component: MainPitchPageComponent;
  let fixture: ComponentFixture<MainPitchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPitchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPitchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
