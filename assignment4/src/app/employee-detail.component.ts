import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from './employee';
import { DataManagerService } from './data-manager.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  providers: [DataManagerService]
})
export class EmployeeDetailComponent implements OnInit {
  private emp: employee;

  constructor(private route: ActivatedRoute, private router: Router, private m: DataManagerService) { 
    let id = this.route.snapshot.params['id'];
    this.emp = this.m.getEmp(id);
  }
    
  ngOnInit() {
  }

}
