import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppealComponent } from './new-appeal.component';

describe('NewAppealComponent', () => {
  let component: NewAppealComponent;
  let fixture: ComponentFixture<NewAppealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAppealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAppealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
