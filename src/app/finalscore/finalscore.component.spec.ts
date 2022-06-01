import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalscoreComponent } from './finalscore.component';

describe('FinalscoreComponent', () => {
  let component: FinalscoreComponent;
  let fixture: ComponentFixture<FinalscoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalscoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
