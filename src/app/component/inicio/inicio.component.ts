import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormularioService } from 'src/app/servicios/formulario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  formulario:any;

  constructor(private fb:FormBuilder, private serviceFormulario: FormularioService) {
  }
  
  ngOnInit(): void {
    this.formulario = this.fb.group({
      campo1:['',Validators.required],
      campo2:[''],
  })

}

get formularioReactivo() {
  return this.formulario.controls;

}
enviarDatos(){
  //subscribe: es un Observable, permite transmitir datos asincrona y sincronica
 this.serviceFormulario.crear_datosFormulario(this.formulario.value).subscribe(
  (response:any)=>{
    if(response.registro){
      alert("Datos guardados exitosamente");
      console.log(response)
    }else{
      alert("Datos no registrado")
    }
  },
  error=>{
    alert("error al registrar")
  }
 )
}
}




