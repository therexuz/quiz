import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../interfaces/cliente';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

  constructor(public clientesService:ClientesService) { }

  ngOnInit(): void {
    this.clientesService.clientes.forEach((item:Cliente)=>{
        console.log(item.nombres);
    })  
  }
}
