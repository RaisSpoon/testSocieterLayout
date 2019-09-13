import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCRSocieterComponent } from './ccrsocieter.component';

describe('CCRSocieterComponent', () => {
  let component: CCRSocieterComponent;
  let fixture: ComponentFixture<CCRSocieterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCRSocieterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCRSocieterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
