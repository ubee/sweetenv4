import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-businessrenovation',
  templateUrl: './businessrenovation.component.html',
  styleUrls: ['./businessrenovation.component.scss']
})
export class BusinessrenovationComponent implements OnInit {
public projects=[];
public showdiv:boolean=false;
public showMessage:boolean=false;
  constructor(private _user:UserService, private _router:Router) {
    this._user.getBusinessProject().subscribe(
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
this.projects=data;
this.showdiv=true;
}
console.log(data);
}

  ngOnInit() {
  }

  Assign(id:string){
    console.log(id);
    this._user.setAssignBusinessProjectId(id);
    this._router.navigate(['/contractorlist']);
 }
 viewdetail(id:string){
 console.log(id);
 this._user.setViewBusinessProjectId(id);
 this._router.navigate(['/businessProjectView']);

 }

}
