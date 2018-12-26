import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientprofile',
  templateUrl: './clientprofile.component.html',
  styleUrls: ['./clientprofile.component.scss']
})
export class ClientprofileComponent implements OnInit {

  public clients=[];
  public showdiv:boolean=false;
public showMessage:boolean=false;
  constructor(private _user:UserService, private _router:Router) {
    this._user.getAllclients()
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
  this.clients=data;
  this.showdiv=true;
  }
   console.log(this.clients);
   }

  ngOnInit() {
  }
  viewproject(id:string){
    console.log(id);
    this._user.setViewProjectId(id);
    this._router.navigate(['/table-list']);

  }
}
