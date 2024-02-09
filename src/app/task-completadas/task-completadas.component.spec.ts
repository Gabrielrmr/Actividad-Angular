import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCompletadasComponent } from './task-completadas.component';

describe('TaskCompletadasComponent', () => {
  let component: TaskCompletadasComponent;
  let fixture: ComponentFixture<TaskCompletadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCompletadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskCompletadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
