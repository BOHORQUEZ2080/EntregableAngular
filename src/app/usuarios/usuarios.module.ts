import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { IndexComponent } from './index/index.component';
import {FormsModule}  from '@angular/forms';
@NgModule({
  imports: [
 
    CommonModule,
    FormsModule
       ],
  declarations: [ListarComponent, AgregarComponent, IndexComponent]
})
export class UsuariosModule { }
