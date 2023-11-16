import { Component } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario:Usuario={
    nombre:"",
    nombre_usuario:"",
    password:"",
    check_profesor:false
  }

  constructor(private router:Router) {
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

}
