import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from '../clientes.service';
import { Cliente} from '../interfaces/cliente'
@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {
  
  formulario:FormGroup;
  
  constructor(public fb:FormBuilder,public clientesService:ClientesService) { 
    this.formulario=fb.group({
      nombres: new FormControl('',[Validators.required]),
      apellidos:new FormControl('',[Validators.required]),
      genero:new FormControl('',[Validators.required]),
      pais:new FormControl('',[Validators.required]),
      ciudad:new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    if(!this.formulario.valid){
      alert("Rellene todos los campos")
      return
    }
    let cliente:Cliente={
      nombres:this.formulario.controls['nombres'].value,
      apellidos:this.formulario.controls['apellidos'].value,
      genero:this.formulario.controls['genero'].value,
      pais:this.formulario.controls['pais'].value,
      ciudad:this.formulario.controls['ciudad'].value
    }

    this.clientesService.clientes.push(cliente)
  }

  cleanForm(){
    let form = <HTMLFormElement>document.getElementById("form");
    form.reset();
  }

}
