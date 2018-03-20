import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { Customer } from './Customer';
import { DataManagerService } from './data-manager.service';

@Component({
  selector: 'app-CustomerCreate',
  templateUrl: './CustomerCreate.component.html',
  styleUrls: ['./CustomerCreate.component.css']
})
export class CustomerCreateComponent implements OnInit {

  private selectedCust: Customer;
  constructor(private m: DataManagerService,private router: Router) { 

  }
  addCustomer(){
    this.m.addCustomer(this.selectedCust);
  }
  ngOnInit() {
  }

}
