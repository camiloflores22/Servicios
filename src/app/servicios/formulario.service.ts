//Importando el cliente Http
import { HttpClient } from '@angular/common/http';
//Fin importado el cliente Http
import { Injectable } from '@angular/core';
//Para ruta de nuestro backend
import { environment } from '../../environments/environment';
//Fin para la ruta de nuestro backend

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  url_backend = environment.url_backend+"/registroForm";

  constructor(private http:HttpClient) { }

  crear_datosFormulario(datosFormulario:any){
    //ruta de nuestro backend a cual se le enviara los datos a registrar
    return this.http.post(`${this.url_backend}/crear-registro`,datosFormulario);
    //Estos Imprimira los datos recibidos desde nuestro formulario
    console.log(datosFormulario);
}
}
