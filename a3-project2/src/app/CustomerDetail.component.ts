import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from './Customer';
import { DataManagerService } from './data-manager.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-CustomerDetail',
  templateUrl: './CustomerDetail.component.html',
  styleUrls: ['./CustomerDetail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  private c:Customer;
  constructor(private route: ActivatedRoute, private router: Router, private service: DataManagerService) { 
    let id = this.route.snapshot.params['id'];
    this.c = service.getOneCustomer(id);
  }

  delete(){
    this.router.navigate(['/customerdelete',this.c.id]);
  }

  ngOnInit() {
  }

}
