import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../usuarios';
import { FormControl, Validators } from '@angular/forms';
import { ProyectServiceProvider } from '../../proyect-service/proyect-service';

@Component({
  selector: 'usuarios-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
 usuarios:Usuarios;

  constructor(private proyectService: ProyectServiceProvider) { }

  ngOnInit() {
   this.usuarios= new Usuarios();
  }

  crearUsuario() {
    alert('Registro Guardado Exitosamente');
    this.proyectService.guardarUsuario(this.usuarios).subscribe(
      response => {
        if (response.code === 200) {
          alert('Registro Guardado Exitosamente');

        } else {
          console.log(response);
        }
      }, error => {
        console.log(<any>error);
      }
    );
  }

}
