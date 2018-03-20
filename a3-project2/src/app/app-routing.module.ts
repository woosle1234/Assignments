import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CustomersComponent } from './customers.component';
import { CustomerCreateComponent } from './CustomerCreate.component';
import { ErrorComponent } from './error.component';
import { CustomerDetailComponent } from './CustomerDetail.component';
import { CustomerDeleteComponent } from './CustomerDelete.component';
import { CustomerEditComponent } from './CustomerEdit.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'customers',component:CustomersComponent},
  {path:'customercreate',component:CustomerCreateComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  { path: 'customerdetail/:id', component: CustomerDetailComponent },
  { path: 'customerdelete/:id', component: CustomerDeleteComponent },
  { path: 'customeredit/:id', component: CustomerEditComponent },
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
