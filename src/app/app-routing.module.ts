import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MaterialSearchComponent } from './material-search/material-search.component';

const routes: Routes = [
  {path : '' , component:MaterialSearchComponent},
  {path : 'ser' , component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
