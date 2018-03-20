import { Injectable } from '@angular/core';
import { employee } from './employee';
import { project } from './project';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class DataManagerService {
  private emp: employee[];
  private proj: project[];

  constructor(private http: HttpClient) { 
  }

  getEmp(id: string){
    let em: employee;
    return em;
  }



  getEmployees(){
    return this.emp;
  }

  getProjects(){
    return this.proj;
  }
  

}
