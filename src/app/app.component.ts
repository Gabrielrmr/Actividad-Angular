import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListaTareasComponent } from './lista-tareas/lista-tareas.component';
import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component';
import { TaskCompletadasComponent } from './task-completadas/task-completadas.component';
import { TaskpendientesComponent } from './taskpendientes/taskpendientes.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,FooterComponent,ListaTareasComponent,NuevaTareaComponent,TaskCompletadasComponent,TaskpendientesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ActividadUno';
}
