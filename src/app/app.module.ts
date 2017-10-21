import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CamarasModule} from './camaras/camaras.module';

import { UsuariosModule} from './usuarios/usuarios.module';
import { MenuComponent} from './menu/menu.component';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import {IndexComponent} from './camaras/index/index.component';
import {IndexComponent as IndexComponent1 }  from './usuarios/index/index.component';
import { CurrentOptionComponent } from './current-option/current-option.component';
import {FormsModule,ReactiveFormsModule }  from "@angular/forms";

const appRoutes: Routes = [
  { path: 'camaras/index', component: IndexComponent },
  { path: 'usuarios/index', component: IndexComponent1 },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CurrentOptionComponent,
   
  ],
  imports: [ReactiveFormsModule ,
    FormsModule,
    BrowserModule,
    CamarasModule,
    UsuariosModule,
    RouterModule.forRoot( appRoutes ),
  
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
