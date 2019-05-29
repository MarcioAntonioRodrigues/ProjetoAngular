import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = 
[
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'categorias/:categoria', component: CategoryComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
