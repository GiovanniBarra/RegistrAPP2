import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.page.html',
  styleUrls: ['./miperfil.page.scss'],
})
export class MiperfilPage implements OnInit {

  usuario:Usuario={
    nombre:"",
    nombre_usuario:"",
    password:"",
    check_profesor:false
  }

  constructor(private router:Router, private storage:Storage) {
    let datos=this.router.getCurrentNavigation()?.extras.state
    if (datos!==undefined)
    {
      let usr=datos["sesion"]
      this.usuario.nombre=usr.nombre
      this.usuario.nombre_usuario=usr.nombre_usuario
      this.usuario.password=usr.password
      console.log(this.usuario)
    }
  }


  ngOnInit() {
  }

  cancelar() {
    this.router.navigate(["/home"])
  }

  async eliminar(){
    await this.storage.remove(this.usuario.nombre_usuario)
    await this.storage.remove("sesion")
    this.router.navigate(["/login"])
      }

  async modificar()
  {
    await this.storage.remove(this.usuario.nombre_usuario)
    await this.storage.set(this.usuario.nombre_usuario, this.usuario);
    let extras:NavigationExtras={
      state:
      {
        sesion: this.usuario
      }
    }
    this.router.navigate(["/home"], extras)
  }
  }


