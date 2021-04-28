import { Injectable } from '@angular/core';
import {Cliente} from './interfaces/cliente'
@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  clientes:Array<Cliente>=[]
  constructor() { }
}
