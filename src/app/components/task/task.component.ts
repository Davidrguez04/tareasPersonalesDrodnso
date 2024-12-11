import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  tasks = ['Tarea 1', 'Tarea 2', 'Tarea 3']; // Lista de tareas iniciales
}

