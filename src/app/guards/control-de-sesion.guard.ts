import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ControlDeSesionGuard implements CanActivate {

  constructor(private storage:Storage){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.validarsesion();
  }
  async validarsesion(){
    let sesion=await this.storage.get("sesion")
    if(sesion[0]==1){return true}
    else {return false}    
  }
}
