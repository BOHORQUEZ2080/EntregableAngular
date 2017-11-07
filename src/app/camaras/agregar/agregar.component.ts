  import { Component, OnInit } from '@angular/core';
  import { Camaras } from '../camaras';
  import { FormControl, Validators } from '@angular/forms';
  import { ProyectServiceProvider } from '../../proyect-service/proyect-service';
  
  import { Router, ActivatedRoute, Params } from '@angular/router';
  @Component({
    selector: 'camaras-agregar',
    templateUrl: './agregar.component.html',
    styleUrls: ['./agregar.component.css']
  })
  export class AgregarComponent implements OnInit {
    camaras: Camaras;
  
  
    constructor(
      private proyectService: ProyectServiceProvider,
      private route: ActivatedRoute,
      private router: Router
    ) {
  
  
    }
    ngOnInit() {    this.camaras = new Camaras();
    }
    crearCamara() {
      alert('Registro Guardado Exitosamente');
      this.proyectService.guardarCamara(this.camaras).subscribe(
        response => {
          if (response.code === 200) {
            alert('Camara Registrada Correctamente');
  
          } else {
            console.log(response);
          }
        }, error => {
          console.log(<any>error);
        }
      );
    }
  
  }