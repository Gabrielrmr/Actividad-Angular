import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskpendientesComponent } from './taskpendientes.component';

describe('TaskpendientesComponent', () => {
  let component: TaskpendientesComponent;
  let fixture: ComponentFixture<TaskpendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskpendientesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskpendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
