import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPartieComponent } from './new-partie.component';

describe('NewPartieComponent', () => {
  let component: NewPartieComponent;
  let fixture: ComponentFixture<NewPartieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPartieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
