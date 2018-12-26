import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-contractortodolist',
  templateUrl: './contractortodolist.component.html',
  styleUrls: ['./contractortodolist.component.scss']
})
export class ContractortodolistComponent implements OnInit {
  task:string;
  taskList=[]
  public showMessage:boolean=false;
  constructor(private _user:UserService, private _router:Router) { }

  ngOnInit() {
    this._user.getTodolist()
    .subscribe(
      data=>this.addData(data),
      error=>this._router.navigate(['/login'])
    )
  }
  addData(data){
this.taskList=data[0].taskList;
console.log(this.taskList)
  }
  logout(){
    this._user.logout()
    .subscribe(
      data=>{console.log(data);this._router.navigate(['/index-01'])},
      error=>console.error(error)
    )
  }

save(){
 console.log(this.taskList);
 this._user.saveBacktodolist(JSON.stringify(this.taskList))
 .subscribe(
   data=> {console.log(data);this.showMessage=true;},
   error=>{console.error(error);}
 )
}
}
