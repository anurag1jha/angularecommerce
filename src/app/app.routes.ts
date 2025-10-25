import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ContactUs } from './contact-us/contact-us';
import { UserProfile } from './user-profile/user-profile';
import { AdminLogin } from './admin/admin-login/admin-login';
import { AdminDashboard } from './admin/admin-dashboard/admin-dashboard';
import { Product } from './product/product';
import { UserCurd } from './admin/user-curd/user-curd';
import { SigninSignup } from './customer/signin-signup/signin-signup';
import { SellerDashboard } from './customer/seller/seller-dashboard/seller-dashboard';
import { BuyerDashboad } from './customer/buyer/buyer-dashboad/buyer-dashboad';
import { PageNotFound } from './shared/layout/page-not-found/page-not-found';
import { AuthGuard, AuthGuardService, BuyerAuthGuardService, SellerAuthGuardService, SellerBuyerAuthGuard } from './shared/services/auth-guard';

export const routes: Routes = [
    { path: '', component: Home, pathMatch: 'full' },
    {path:"my-profile", component:UserProfile },
    {path:"contact-us", component:ContactUs },
    //admin
    {
        path:'', canActivate:[AuthGuard],children:[
            {path:'admin-login', component: AdminLogin}
        ]
    },
    {
        path:'',canActivate:[AuthGuardService] ,children:[
            {path:'admin-dashboard', component:AdminDashboard},
            {path:'admin/user', component:UserCurd},
            {path:'admin/product', component:Product}
        ]
    },
    {
        path:"",canActivate:[SellerBuyerAuthGuard], children:[
            {path:'sign-in', component:SigninSignup},
            {path:'sign-up', component:SigninSignup}
        ]
    },
     {
        path:"",canActivate:[SellerAuthGuardService], children:[
            {path:'seller-dashboard', component:SellerDashboard},
            {path:'seller/product', component:Product}
        ]
    },
     {
        path:"",canActivate:[BuyerAuthGuardService], children:[
            {path:'buyer-dashboard', component:BuyerDashboad},
            {path:'sign-up', component:SigninSignup}
        ]
    },
    {path:'**', component:PageNotFound}
];
