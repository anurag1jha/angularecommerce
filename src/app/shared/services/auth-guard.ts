import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot } from '@angular/router';


// Admin Before Login Check
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    
    let role = sessionStorage.getItem('role');
    
    if(role == 'admin'){
      this.router.navigate(['./admin-dashboard']);
      return false;
    }else{
      return true;
    }

 throw new Error('Method not implemented.');
  }
  
}

//Admin After Login Check
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService{

  constructor(private router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    
    let role = sessionStorage.getItem('role');
    
    if(role?.toLowerCase() == 'admin'){
     
      return true;
    }else{
      this.router.navigate(['./admin-login'])
    }

 throw new Error('Method not implemented.');
  }
  
}

// Customer(buyer & Seller) Before Login Check
@Injectable({
  providedIn: 'root'
})
export class SellerBuyerAuthGuard implements CanActivate{

  constructor(private router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    
    let role = sessionStorage.getItem('role');
    
    if(role?.toLowerCase() == 'seller'){
      this.router.navigate(['./seller-dashboard']);
      return false;
    }else if(role?.toLowerCase() == 'buyer'){
      this.router.navigate(['./buyer-dashboard'])
      return false;
    }else{
      return true;
    }

 throw new Error('Method not implemented.');
  }
  
}

//Buyer After Login Check
@Injectable({
  providedIn: 'root'
})
export class BuyerAuthGuardService{

  constructor(private router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    
    let role = sessionStorage.getItem('role');
    
    if(role?.toLowerCase() == 'buyer'){
     
      return true;
    }else{
      this.router.navigate(['./sign-in'])
    }

 throw new Error('Method not implemented.');
  }
  
}

//Seller After Login Check
@Injectable({
  providedIn: 'root'
})
export class SellerAuthGuardService{

  constructor(private router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    
    let role = sessionStorage.getItem('role');
    
    if(role?.toLowerCase() == 'seller'){
     
      return true;
    }else{
      this.router.navigate(['./sign-in'])
    }

 throw new Error('Method not implemented.');
  }
  
}