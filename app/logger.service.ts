import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  log(texto: string)  {
    console.log(texto);
  }
}
