import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc02UserLoginComponent } from './myc02-user-login.component';

describe('Myc02UserLoginComponent', () => {
  let component: Myc02UserLoginComponent;
  let fixture: ComponentFixture<Myc02UserLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Myc02UserLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Myc02UserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
