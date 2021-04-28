import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardViewComponent } from './card-view/card-view.component';
import { CreateClientComponent } from './create-client/create-client.component';
import { ListViewComponent } from './list-view/list-view.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path:'card-view',component:CardViewComponent},
  {path:'list-view',component:ListViewComponent},
  {path:'create-client',component:CreateClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
