import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from './employee';
import { DataManagerService } from './data-manager.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [DataManagerService]
})
export class EmployeesComponent implements OnInit {
  private emp: employee[];

  constructor(private m: DataManagerService,private router: Router,private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<employee[]>('https://evening-eyrie-59881.herokuapp.com/employees').subscribe(data=>{
      this.emp = data;
      console.log(this.emp);
    });
  }

  select(em: employee){
    this.router.navigate(['/employeeDetail',em._id]);
  }
}
