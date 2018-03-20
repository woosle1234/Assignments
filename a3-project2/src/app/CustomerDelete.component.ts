import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from './Customer';
import { DataManagerService } from './data-manager.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-CustomerDelete',
  templateUrl: './CustomerDelete.component.html',
  styleUrls: ['./CustomerDelete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  private c:Customer;
  constructor(private route: ActivatedRoute, private router: Router, private service: DataManagerService) { 
    let id = this.route.snapshot.params['id'];
    this.c = service.getOneCustomer(id);
  }

  delete(){
    this.service.delete(this.c,this.c.id);
    this.router.navigate(['/customers']);
  }
  ngOnInit() {
  }

}
