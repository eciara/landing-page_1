import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMisionComponent } from './our-mision.component';

describe('OurMisionComponent', () => {
  let component: OurMisionComponent;
  let fixture: ComponentFixture<OurMisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurMisionComponent]
    });
    fixture = TestBed.createComponent(OurMisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
