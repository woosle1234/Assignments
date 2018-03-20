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
  
  saveEmp(e: employee[]){
    this.emp=e;
  }

  saveProj(p: project[]){
    this.proj=p;
  }

  getEmp(id: string){
    return this.emp;
  }

  getEmployees(){
    return this.emp;
  }

  getProjects(){
    return this.proj;
  }

}
