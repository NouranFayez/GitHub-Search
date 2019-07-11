import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { Routes, RouterModule } from '@angular/router';
import {DetailsComponent} from './features/details/details.component'
import { MainComponent } from './features/main/main.component';


const routes: Routes = [
  {path: '' , component:MainComponent},
  {path: 'home' ,redirectTo:'' ,pathMatch:'full'},
  { path:'details/:login/:name' , component:DetailsComponent},
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DetailsComponent]
