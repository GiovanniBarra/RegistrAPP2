import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario:Usuario={
    nombre:"",
    nombre_usuario:"",
    check_profesor:false,
    password:""
  }

  constructor(private storage:Storage, private router:Router) { }

  ngOnInit() {
  }

  async registrar() {
    await this.storage.set(this.usuario.nombre_usuario, this.usuario)
    this.router.navigate(["/login"])
  }

}
