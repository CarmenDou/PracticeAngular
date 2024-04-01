import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc02Child1ModifyComponent } from './myc02-child1-modify.component';

describe('Myc02Child1ModifyComponent', () => {
  let component: Myc02Child1ModifyComponent;
  let fixture: ComponentFixture<Myc02Child1ModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Myc02Child1ModifyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Myc02Child1ModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
