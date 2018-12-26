import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  public post1=[];
  public showdiv:boolean=false;
  public showMessage:boolean=false;

  constructor(private _user:UserService, private _router:Router) {
    this._user.getclientsProject().subscribe(
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
  this.post1=data;
  this.showdiv=true;
  }   
}
 
  viewprojects(id1:string){
    console.log(id1);
    this._user.setViewProjects(id1);
    this._router.navigate(['/user-profile']);
  }
  ngOnInit() {
  }

}
