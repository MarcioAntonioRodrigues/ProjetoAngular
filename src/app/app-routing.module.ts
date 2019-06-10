import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { DetailComponent } from './detail/detail.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = 
[
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'detalhes', component: DetailComponent },
  { path: 'categorias/:categoria', component: CategoryComponent },
  { path: 'compra', component: PurchaseComponent },
  { path: 'busca/:busca', component: SearchComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
