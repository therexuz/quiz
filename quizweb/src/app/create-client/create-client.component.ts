import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Cliente} from '../interfaces/cliente'
@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {
  
  formulario:FormGroup;

  clientes:Array<Cliente> =[];

  constructor(public fb:FormBuilder) { 
    this.formulario=fb.group({
      nombres: new FormControl(''),
      apellidos: new FormControl(''),
      genero: new FormControl(''),
      pais: new FormControl(''),
      ciudad: new FormControl('')
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
    
  }

}
