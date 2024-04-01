import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc03Child2PhotoComponent } from './myc03-child2-photo.component';

describe('Myc03Child2PhotoComponent', () => {
  let component: Myc03Child2PhotoComponent;
  let fixture: ComponentFixture<Myc03Child2PhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Myc03Child2PhotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Myc03Child2PhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
