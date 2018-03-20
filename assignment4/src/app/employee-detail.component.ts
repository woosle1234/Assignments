import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from './employee';
import { DataManagerService } from './data-manager.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
  providers: [DataManagerService, DatePipe]
})
export class EmployeeDetailComponent implements OnInit {
  private emp: employee;
  private emps: employee[];

  constructor(private route: ActivatedRoute, private router: Router, private m: DataManagerService,private http: HttpClient,private dp:DatePipe) { 
    let id = this.route.snapshot.params['id'];
    this.emp = this.emps;
  }
    
  ngOnInit() {
  }

}
