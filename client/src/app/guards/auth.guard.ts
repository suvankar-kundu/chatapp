import { Injectable } from '@angular/core';
import { Router,Route, CanActivate,CanActivateChild,CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;  
        return this.verifyLogin(url);
     }
    
      canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
      }
    
      canLoad(route: Route): boolean {
        let url = `/${route.path}`;
        return this.verifyLogin(url);
      }

      // Verify login
      verifyLogin(url):boolean{
        if(!this.isLoggedIn()){
          // not logged in so return to login page
          this.router.navigate(['/login']);
          return false;
        }
        else if(this.isLoggedIn()){
          // logged in so return true
          return true;
        }
      }

      public isLoggedIn(): boolean{
        let status = false;
        if( localStorage.getItem('isLoggedIn') == "true"){
          status = true;
        }
        else{
          status = false;
        }
        return status;
      }
}