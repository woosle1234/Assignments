import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from './Customer';
import { DataManagerService } from './data-manager.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-CustomerEdit',
  templateUrl: './CustomerEdit.component.html',
  styleUrls: ['./CustomerEdit.component.css']
})
export class CustomerEditComponent implements OnInit {
  private c:Customer;
  private selectedCust: Customer;
  constructor(private route: ActivatedRoute, private router: Router, private m: DataManagerService) { 
    let id = this.route.snapshot.params['id'];
    this.c = m.getOneCustomer(id);
  }
  editCustomer(){
    this.m.editCustomer(this.c,this.selectedCust);
    this.router.navigate(["/customers"])
  }
  ngOnInit() {
  }

}
