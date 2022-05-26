import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsSocketComponent } from './questions-socket.component';

describe('QuestionsSocketComponent', () => {
  let component: QuestionsSocketComponent;
  let fixture: ComponentFixture<QuestionsSocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionsSocketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsSocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
