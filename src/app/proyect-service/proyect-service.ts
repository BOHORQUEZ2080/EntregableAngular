import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Camaras } from '../camaras/camaras';

import { Usuarios } from '../usuarios/usuarios';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProyectServiceProvider {
  usuariosList: Array<Usuarios>;

  camarasList: Array<Camaras>;
  headersPost: Headers;
  options: RequestOptions;
  
  constructor(
    private http: HttpClient,private _http: Http
  ) { }

  gatData() {
    this.http.get("http://139.162.118.169:8080/ProyectoAndroid/webresources/com.android.entidades.camara")
      .subscribe(data => {
        this.camarasList = data as Array<Camaras>;
      });
  }

  guardarCamara(nuevaCamara: Camaras) {
    const json = JSON.stringify(nuevaCamara);
    const params = json;
    const headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

    return this._http.post('http://139.162.118.169:8080/ProyectoAndroid/webresources/com.android.entidades.camara',
      params, { headers: headers }).map(res => res.json());

  }

  
  gatDataUsu() {
    this.http.get("http://139.162.118.169:8080/ProyectoAndroid/webresources/com.android.entidades.usuario")
      .subscribe(data => {
        this.usuariosList = data as Array<Usuarios>;
      });
  }

  guardarUsuario(nuevoUsuario: Usuarios) {
    const json = JSON.stringify(nuevoUsuario);
    const params = json;
    const headers = new Headers({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

    return this._http.post('http://139.162.118.169:8080/ProyectoAndroid/webresources/com.android.entidades.usuario',
      params, { headers: headers }).map(res => res.json());

  }
   
}