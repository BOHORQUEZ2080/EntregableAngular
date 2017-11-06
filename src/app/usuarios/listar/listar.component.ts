import { Component, OnInit } from '@angular/core';
import { ProyectServiceProvider } from '../../proyect-service/proyect-service';

@Component({
  selector: 'usuarios-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(  private proyectService:ProyectServiceProvider) { }

  ngOnInit() {
    this.proyectService.gatDataUsu();
  }

}
