import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'my-app',
  template: `
            <div class="container theme-showcase" >
              <h1>Ejercicio {{titulo}}</h1>
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
            providers: [LoggerService]
})
export class AppComponent  implements OnInit  {
  titulo = 'Angular Radhull';
  ListaTareas: Tarea[];
  tarea: string;
  selectedTarea: Tarea;
  ngOnInit(): void {
    this.loggerService.log('Init');
  }

  constructor(private loggerService: LoggerService) {
    this.tarea = '';
    this.ListaTareas = [];
    this.loggerService.log('constructor');
  }
  selectTarea(tarea: Tarea) {
    this.selectedTarea = tarea;
    this.loggerService.log(`Seleccionada tarea ${tarea.nombre}`);
  }
  addTarea() {
    this.ListaTareas.push({nombre: this.tarea });
    this.loggerService.log(`Añadida tarea ${this.tarea}`);
    this.tarea = '';
  }

  delTarea(indice: number) {
    this.loggerService.log(`Eliminada tarea ${this.ListaTareas[indice].nombre}`);
    this.ListaTareas.splice(indice, 1);
    this.selectedTarea = null;
  }
}

type  Tarea = {nombre: string};
