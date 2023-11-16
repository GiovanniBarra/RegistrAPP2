import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { Storage } from '@ionic/storage-angular';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:Usuario={
    nombre:"",
    nombre_usuario:"",
    check_profesor:false,
    password:""
  }

  constructor(private storage:Storage, private router:Router) { }

  ngOnInit() {
  }

  async login() {
    let clave= await this.storage.get(this.usuario.nombre_usuario)
    if (clave !== null) 
    {
      if (clave.password==this.usuario.password)
      {
        this.usuario.nombre=clave.nombre
        await this.storage.set("sesion", [1, this.usuario.nombre_usuario])
        let extras:NavigationExtras={
          state:{
            sesion:this.usuario
          }
        }
        this.router.navigate(["/home"],extras)
      }
      else 
      {
        console.log("usuario incorrecto")
      }
    }
    else 
    {
      console.log("usuario incorrecto")
    }
  }
}
