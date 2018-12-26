import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  public clientsProject1=[];
  public clientsProject2=[];
  public clientsProject3=[];
  public projects=[];
  public showdiv:boolean=false;
  public showMessage:boolean=false;

  constructor(private _user:UserService, private _router:Router) { 
    this._user.getAllProject1().subscribe(
      data=>this.addData1(data),
      error=>this._router.navigate(['/login'])
    )
    
  }
  addData1(data){
    if(data==""){
      this.showdiv=false;
      this.showMessage=true;
  
    }
    else{
  this.clientsProject1=data;
  this.showdiv=true;
  }
  
  }
  addData2(data){
    this.clientsProject2=data;
  }
  addData3(data){
    this.clientsProject3=data;

   this.projects=[{post1:this.clientsProject1,post2:this.clientsProject2,post3:this.clientsProject3}];
   console.log(this.projects);
  }

  viewprojects(id1:string){
    console.log(id1);
    this._user.setViewProjects(id1);
    this._router.navigate(['/user-profile']);
  }
   Assign(id1:string,userid:string){
      console.log(id1);
    this._user.setAssignProjectId(id1,userid);
      this._router.navigate(['/contractorlist']);
   }
   

  ngOnInit() {
  }
  

}
