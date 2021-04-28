import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  constructor(public clientesService:ClientesService) { }

  ngOnInit(): void {
    
  }

}
