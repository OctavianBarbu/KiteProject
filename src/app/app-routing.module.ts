import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AddSpotPageComponent } from './pages/add-spot-page/add-spot-page.component';

const routes: Routes = [
  {path:"login", component: LoginPageComponent},
  {path:"", component: MainPageComponent},//, canActivate: [AuthGuard]},
  {path:"register", component: RegisterPageComponent},
  {path:"add-spot", component: AddSpotPageComponent}//, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
