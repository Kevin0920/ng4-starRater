import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RatingStarComponent } from './rating-star/rating-star.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'', component: RatingStarComponent },
  { path:'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
