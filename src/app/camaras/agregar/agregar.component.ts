import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'camaras-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  title = ' Linea 123';
   camara=[{nmatriz:1, direccion:'Carrera 20 calle 15',tipo:'fija', fase:3,estado:'en servicio',
  observacion:'presenta problemas al manipularla'},
  {nmatriz:2, direccion:'Carrera 20 calle 15',tipo:'fija', fase:3,estado:'en servicio',
  observacion:'presenta problemas al manipularla'},
  {nmatriz:3, direccion:'Carrera 20 calle 15',tipo:'fija', fase:3,estado:'en servicio',
  observacion:'presenta problemas al manipularla'},
];  
  cam={nmatriz:null, direccion:null, tipo:null, fase:null, estado:null,observacion:null};

  show_form = false;
  editing = false;
  addCamara(){
    this.show_form= true;
   }
   verCamara(cam){
     this.editing= true;
     this.cam=cam;
    this.show_form= true;
   }
   delete(){
     var me=this;
     this.camara.forEach(function(el, i){
      if(el.nmatriz==me.cam.nmatriz){
        me.camara.splice(i,1);
       }
      });    
     this.show_form=false;
     this.cam={nmatriz:null, direccion:null, tipo:null, fase:null, estado:null,observacion:null};  
   }
   cancel(){
    this.show_form= false;
  }
  crearCamara(){
    if(this.editing){
     var me =this;
      this.camara.forEach(function(el, i){
        if(el.nmatriz==me.cam.nmatriz){
          me.camara[i]=me.cam
        }      
    });
    this.show_form=false;
    this.cam={nmatriz:null, direccion:null, tipo:null, fase:null, estado:null,observacion:null};
    
  }else{
    this.cam.nmatriz=Date.now();
    this.camara.push(this.cam)
    this.show_form=false;
    this.cam={nmatriz:null, direccion:null, tipo:null, fase:null, estado:null,observacion:null};
    }
  }
  constructor() { }
  ngOnInit() {
  }
}
