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
    emailFormControl = new FormControl('', [
      Validators.required]);
  
    public camaraAdd: Camaras;
    constructor(
      private proyectService: ProyectServiceProvider,
      private route: ActivatedRoute,
      private router: Router
    ) {
  
      this.camaras = new Camaras('1','1','1','1','1','1');
    }
    ngOnInit() {
    }
    crearCamara() {
      this.proyectService.guardarCamara(this.camaras).subscribe(
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