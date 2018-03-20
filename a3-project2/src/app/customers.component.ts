import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from './Customer';
import { DataManagerService } from './data-manager.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['/customers.component.css'],
})

export class CustomersComponent implements OnInit {
  private selectedCust:Customer;
  private Custom: Customer[]; 
  constructor(private m: DataManagerService,private router: Router) {

    this.Custom = this.m.getCustomers();
  }
  selectRow(cu: Customer) {
    this.selectedCust = cu;

    let findCust = this.m.getOneCustomer(cu.id);

    this.router.navigate(['/customerdetail',cu.id]);
  }
  ngOnInit() {
  }


}
