import { Component, OnInit } from '@angular/core';

import { ProyectServiceProvider } from '../../proyect-service/proyect-service';

@Component({
  selector: 'camaras-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
  providers: [ProyectServiceProvider],
})
export class ListarComponent implements OnInit {
  constructor(
    private proyectService:ProyectServiceProvider
  ) { }

  ngOnInit() {
    this.proyectService.gatData();
  }

  

}
