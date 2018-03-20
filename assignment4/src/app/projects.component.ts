import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { project } from './project';
import { DataManagerService } from './data-manager.service';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [DataManagerService, DatePipe]
})
export class ProjectsComponent implements OnInit {
  private proj: project[];

  constructor(private m: DataManagerService, private router: Router,private http: HttpClient, private dp: DatePipe) {

  }

  ngOnInit() {
    this.http.get<project[]>('https://evening-eyrie-59881.herokuapp.com/projects').subscribe(res=>{
      this.proj=res;
    });
  }

}
