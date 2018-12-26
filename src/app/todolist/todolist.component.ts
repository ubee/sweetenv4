import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  task:string;
  taskList=[]
  showStyle: false;

  constructor(private _user:UserService, private _router:Router) {

   }

  ngOnInit() {
    this._user.getTodolist()
    .subscribe(
      data=>this.addData(data),
      error=>this._router.navigate(['/login'])
    )
  }
  addData(data){
    if(data==""){
      this._user.savetodolist(this.taskList)
      .subscribe(
        data=> {console.log(data);},
        error=>{console.error(error);}
      )
    }
else{
    this.taskList=data[0].taskList;

    console.log(this.taskList)

}
  }
  logout(){
    this._user.logout()
    .subscribe(
      data=>{console.log(data);this._router.navigate(['/index-01'])},
      error=>console.error(error)
    )
  }
  newElement()
{
this.taskList.push({done:false,task:this.task});
this.task='';
console.log(this.taskList);

this._user.updatetodolist(JSON.stringify(this.taskList))
.subscribe(
  data=> {console.log(data);},
  error=>{console.error(error);}
)


}
remtask(i){
  this.taskList.splice(i,1);
  this._user.updatetodolist(JSON.stringify(this.taskList))
  .subscribe(
    data=> {console.log(data);},
    error=>{console.error(error);}
  )
}
save(){
  this._user.savetodolist(JSON.stringify(this.taskList))
  .subscribe(
    data=> {console.log(data);},
    error=>{console.error(error);}
  )
}
update(){
  this._user.updatetodolist(JSON.stringify(this.taskList))
  .subscribe(
    data=> {console.log(data);},
    error=>{console.error(error);}
  )
}

}
