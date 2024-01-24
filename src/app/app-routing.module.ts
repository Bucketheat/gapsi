import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './vista/home/home.component';
import { ProvedoresComponent } from './vista/provedores/provedores.component';

const APP_ROUTES: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Proveedor',component:ProvedoresComponent},
  {path:'**',pathMatch:'full',redirectTo: 'Home'}
];


@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
