import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { EmployeesComponent } from './employees.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeCreateComponent } from './employee-create.component';
import { ProjectsComponent } from './projects.component';
import { ProjectDetailComponent } from './project-detail.component';
import { ProjectEditComponent } from './project-edit.component';
import { LogComponent } from './log.component';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';
import { NotFoundComponent } from './not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    EmployeeCreateComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    ProjectEditComponent,
    LogComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
