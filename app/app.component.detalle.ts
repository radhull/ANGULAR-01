import { Component, Input } from '@angular/core';


@Component({
  selector: 'my-app-detalle',
  template: `
              <div *ngIf="tarea" class="jumbotron">
                <h2>Detalle <span style="text-transform: uppercase">{{tarea.nombre}}</span>!</h2>
                <div class="form-inline form-group">
                  <label>Modificar Tarea: </label>
                  <input [(ngModel)]="tarea.nombre" placeholder="Tarea" class="form-control" style="text-transform: uppercase"/>
                </div>
              </div>
`,
})
export class AppDetalleComponent  {

  @Input()
  tarea: Tarea;
  constructor() {
  }
}

type  Tarea = {nombre: string };
