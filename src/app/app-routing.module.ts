import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'dashboard', component:HomeComponent},
  {path:'resources', component:TableComponent},
  {path:'tasks', component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
