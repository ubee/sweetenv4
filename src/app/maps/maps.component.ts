import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
public projectid1;
public projectid2;
public projectid3;
public post1=[];
public post2=[];
public post3=[];
public projects=[]
public data=[];
public appinfo=[];
public showMessage:boolean=false;
public showdiv:boolean=false;


  constructor(private _user:UserService, private _router:Router) { }

  ngOnInit() {
    this._user.getAssignedProjectId()
    .subscribe(
      data=>this.addData(data),
      error=>this._router.navigate(['/login'])
    )
  }
  addData(data){
    if(data==""){
      this.showdiv=false;
      this.showMessage=true;
  
    }
    else{
  this.data=data;
  this.showdiv=true;
  }

    this.data.forEach(element => {
      this._user.getProjectinfo(element.projectid).subscribe(
       data=>{console.log(data[0]);this.appinfo.push(data[0])},
       error=>this._router.navigate(['/login'])
     )
     });
     console.log(this.appinfo);
  }
viewprojects(id1:string){
    console.log(id1);
    this._user.setViewProjects(id1);
    this._router.navigate(['/user-profile']);
  }

}
