import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationProfComponent } from './registration-prof.component';

describe('RegistrationProfComponent', () => {
  let component: RegistrationProfComponent;
  let fixture: ComponentFixture<RegistrationProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
