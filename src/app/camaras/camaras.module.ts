import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './listar/listar.component';
import { IndexComponent } from './index/index.component';
import { AgregarComponent } from './agregar/agregar.component';

import {FormsModule}  from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ListarComponent, IndexComponent, AgregarComponent]
})
export class CamarasModule { }
