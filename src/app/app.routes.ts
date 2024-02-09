import { Routes } from '@angular/router';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { TaskCompletadasComponent } from './task-completadas/task-completadas.component';
import { TaskpendientesComponent } from './taskpendientes/taskpendientes.component';

export const routes: Routes = [
{
  path: 'Taskall',component: ListaTareasComponent,
},
{
  path: 'Taskcomplete',component: TaskCompletadasComponent,
},
{
  path: 'Taskincomplete',component: TaskpendientesComponent,
},
{
  path:'**',redirectTo:'Taskall',
}
];
