import { Component, OnInit } from '@angular/core';
import { MiperfilPage } from 'src/app/pages/miperfil/miperfil.page';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  usuario:Usuario={
    nombre:"",
    nombre_usuario:"",
    check_profesor:"",
    password:""
  }

  constructor(private router:Router, private storage:Storage) { }

  ngOnInit() {}

  async miperfil() {
    let sesion= await this.storage.get("sesion")
    let datos= await this.storage.get(sesion[1])
    this.usuario.nombre=datos.nombre
    this.usuario.nombre_usuario=datos.nombre_usuario
    this.usuario.password=datos.password
    this.usuario.check_profesor=datos.check_profesor
    let extras:NavigationExtras={
      state:{
        sesion:this.usuario
      }
    }
    this.router.navigate(["/miperfil"],extras)
  }

  async cerrarsesion(){
    await this.storage.remove("sesion")
    this.router.navigate(["/login"])
  }

}
