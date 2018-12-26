import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contractorpage',
  templateUrl: './contractorpage.component.html',
  styleUrls: ['./contractorpage.component.scss']
})
export class ContractorpageComponent implements OnInit {

public projectid1; 
public projectid2;
public projectid3;
public post1=[];
public projects=[]
public appinfo=[];
  username:String='';
  usertype:String='';
  public showdiv:boolean= false;
  public showMessage:boolean= false;

  constructor(private _user:UserService, private _router:Router) { 
    this._user.user()
    .subscribe(
      data=>this.addName(data),
      error=>this._router.navigate(['/login'])
    )
    this._user.getAssignedPId()
    .subscribe(
      data=>this.addData(data),
      error=>this._router.navigate(['/login'])
    )
  }

  addName(data){
    this.username = data.username;
    this.usertype= data.usertype;
  }

  ngOnInit() {
  }

  addData(data){
    this.projectid1=data;  
    if(this.projectid1==""){
     this.showMessage=true;
    }
    else{
      this.showdiv=true;

    this.projectid1.forEach(element => {
      this._user.getProjectinfo(element.projectid).subscribe(
       data=>{console.log(data[0]);this.appinfo.push(data[0])},
       error=>this._router.navigate(['/login'])
     )
     });
    console.log(this.projectid1) ;
    }
  
  }
  addData1(data){
    this.post1=data;
    }
   

  logout(){
    this._user.logout()
    .subscribe(
      data=>{console.log(data);this._router.navigate(['/index-01'])},
      error=>console.error(error)
    )
  }
  viewprojects(id1:string){
    console.log(id1);
    this._user.setViewProjects(id1);
    this._router.navigate(['/contractorprojectdetail'])
  }
  viewtodolist(id1:string){
    this._user.setgetToDolistid(id1);
    this._router.navigate(['/contractortodolist'])

  }
 
}
