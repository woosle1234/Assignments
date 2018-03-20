import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { Customer } from './Customer';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { CustomersComponent } from './customers.component';
import { CustomerDetailComponent } from './CustomerDetail.component';
import { CustomerDeleteComponent } from './CustomerDelete.component';
import { CustomerCreateComponent } from './CustomerCreate.component';
import { CustomerEditComponent } from './customerEdit.component';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';
import { ErrorComponent } from './error.component';
import { DataManagerService } from './data-manager.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomersComponent,
    CustomerDetailComponent,
    CustomerDeleteComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    NavbarComponent,
    FooterComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
