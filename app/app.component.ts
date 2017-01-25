import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
            <div class="container theme-showcase" >
              <h1>Ejercicio {{name}}</h1>
              <div class="jumbotron">
                <div class="form-inline form-group">
                    <label>Introduzca una tarea: </label>
                    <input [(ngModel)]="tarea" class="form-control"  placeholder="Tarea" style="text-transform: uppercase"/>
                    <button (click)="addTarea()" *ngIf="tarea" class="btn btn-primary">Añadir</button>
                </div>
                <ul class="list-group">
                  <li *ngFor="let item of ListaTareas; let indice = index" (click)="selectTarea(item)" class="list-group-item">
                      <span style="text-transform: uppercase"><span class="badge">{{indice+1}}</span> 
                        {{item.nombre}}
                      </span>
                      <span style="float:right" class="glyphicon glyphicon-remove" (click)="delTarea(indice)"></span>
                  </li>
                </ul>
              </div>
              <my-app-detalle [tarea]="selectedTarea"></my-app-detalle>
            </div>
            `,
})
export class AppComponent  {
  name = 'Angular Radhull';
  ListaTareas: Tarea[];
  tarea: string;
  selectedTarea: Tarea;
  constructor() {
    this.tarea = '';
    this.ListaTareas = [];
  }
  selectTarea(tarea: Tarea) {
    this.selectedTarea = tarea;
  }
  addTarea() {
    this.ListaTareas.push({nombre: this.tarea });
    this.tarea = '';
  }

  delTarea(indice: number) {
    this.ListaTareas.splice(indice, 1);
    this.selectedTarea = null;
  }
}

type  Tarea = {nombre: string};
