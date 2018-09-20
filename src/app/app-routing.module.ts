import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SecureRoutes } from './secure/secure.module';
import { SuggetionsComponent } from './secure/suggetions/suggetions.component';
import { AuthenticationGuardService } from './guard/authentication-guard.service';





const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginPageComponent},
  {path:'home', children: SecureRoutes, canActivate:[AuthenticationGuardService]},
  
 // {path:'Suggestions', component: SuggetionsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  
})

export class AppRoutingModule { }
