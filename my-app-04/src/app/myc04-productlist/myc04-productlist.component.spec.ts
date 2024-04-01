import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc04ProductlistComponent } from './myc04-productlist.component';

describe('Myc04ProductlistComponent', () => {
  let component: Myc04ProductlistComponent;
  let fixture: ComponentFixture<Myc04ProductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Myc04ProductlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Myc04ProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
