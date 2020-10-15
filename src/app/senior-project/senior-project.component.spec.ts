import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeniorProjectComponent } from './senior-project.component';

describe('SeniorProjectComponent', () => {
  let component: SeniorProjectComponent;
  let fixture: ComponentFixture<SeniorProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeniorProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeniorProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
