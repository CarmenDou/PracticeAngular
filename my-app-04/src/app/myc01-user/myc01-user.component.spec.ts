import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc01UserComponent } from './myc01-user.component';

describe('Myc01UserComponent', () => {
  let component: Myc01UserComponent;
  let fixture: ComponentFixture<Myc01UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Myc01UserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Myc01UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
