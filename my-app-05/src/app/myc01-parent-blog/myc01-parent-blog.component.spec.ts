import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc01ParentBlogComponent } from './myc01-parent-blog.component';

describe('Myc01ParentBlogComponent', () => {
  let component: Myc01ParentBlogComponent;
  let fixture: ComponentFixture<Myc01ParentBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Myc01ParentBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Myc01ParentBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
