import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc02UserRegisterComponent } from './myc02-user-register.component';

describe('Myc02UserRegisterComponent', () => {
  let component: Myc02UserRegisterComponent;
  let fixture: ComponentFixture<Myc02UserRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Myc02UserRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Myc02UserRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
