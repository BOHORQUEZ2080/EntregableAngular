import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CamarasModule} from './camaras/camaras.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UsuariosModule} from './usuarios/usuarios.module';
import { MenuComponent} from './menu/menu.component';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import {IndexComponent} from './camaras/index/index.component';
import {AgregarComponent} from './camaras/agregar/agregar.component';
import {AgregarComponent as Agregarusu} from './usuarios/agregar/agregar.component';
import {IndexComponent as IndexComponent1 }  from './usuarios/index/index.component';
import { CurrentOptionComponent } from './current-option/current-option.component';
import {FormsModule,ReactiveFormsModule }  from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ProyectServiceProvider } from './proyect-service/proyect-service';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import {BrowserAnimationsModule} from
'@angular/platform-browser/animations';
const appRoutes: Routes = [
  { path: 'camaras/index', component: IndexComponent },
  { path: 'usuarios/index', component: IndexComponent1 },
  { path: 'camaras/agregar', component: AgregarComponent },
  { path: 'usuarios/agregar', component: Agregarusu },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent, 
    CurrentOptionComponent,
       
   
  ],
  imports: [NgbModule.forRoot (),ReactiveFormsModule ,
    FormsModule,
    BrowserModule,
    CamarasModule,
    UsuariosModule,
    RouterModule.forRoot( appRoutes ),
    HttpClientModule,
    
 HttpModule,
 BrowserAnimationsModule,
 MatAutocompleteModule,
 MatButtonModule,
 MatButtonToggleModule,
 MatCardModule,
 MatCheckboxModule,
 MatChipsModule,
 MatDatepickerModule,
 MatDialogModule,
 MatExpansionModule,
 MatGridListModule,
 MatIconModule,
 MatInputModule,
 MatListModule,
 MatMenuModule,
 MatNativeDateModule,
 MatPaginatorModule,
 MatProgressBarModule,
 MatProgressSpinnerModule,
 MatRadioModule,
 MatRippleModule,
 MatSelectModule,
 MatSidenavModule,
 MatSliderModule,
 MatSlideToggleModule,
 MatSnackBarModule,
 MatSortModule,
 MatTableModule,
 MatTabsModule,
 MatToolbarModule,
 MatTooltipModule,
 


  
   ],
  providers: [ProyectServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
