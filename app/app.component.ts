import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
            <div class="container theme-showcase">
              <h1>Hola {{name}}</h1>
              <div class="jumbotron">
                <div class="form-inline form-group">
                    <label>Introduzca una tarea</label>
                    <input [(ngModel)]="tarea" class="form-control" />
                    <button (click)="addTarea()" *ngIf="tarea" class="btn btn-primary">Añadir</button>
                    <ul>
                      <li *ngFor="let _tarea of tareas" (click)="selectTarea(_tarea)">
                        {{_tarea.nombre}}
                      </li>
                    </ul>
                </div>
              </div>
            </div>`,
})
export class AppComponent  {
  name = 'Angular Radhull';
  tareas: Tarea[];
  tarea: string;
  selectedTarea: Tarea;
  constructor() {
    this.tarea = '';
    this.tareas = [];
  }
  selectTarea(tarea: Tarea) {
    this.selectedTarea = tarea;
  }
  addTarea() {
    let tareaAdd: Tarea = {nombre: this.tarea };
    this.tareas.push(tareaAdd);
    this.tarea = '';
  }
}

type  Tarea = {nombre: string};
