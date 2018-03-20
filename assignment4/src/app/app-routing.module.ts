import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeesComponent } from './employees.component';
import { EmployeeCreateComponent } from './employee-create.component';
import { ProjectsComponent } from './projects.component';
import { NotFoundComponent } from './not-found.component';
import { EmployeeDetailComponent } from './employee-detail.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'employeeDetail/:id', component:EmployeeDetailComponent},
  {path:'employeesList', component:EmployeesComponent},
  {path:'createEmployee', component:EmployeeCreateComponent},
  {path:'projectsList', component:ProjectsComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
