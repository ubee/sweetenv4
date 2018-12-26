import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
public post1=[];
public post2=[];
public post3=[];
  constructor(private _user:UserService, private _router:Router) {
    this._user.getProject1().subscribe(
      data=>this.addData1(data),
      error=>this._router.navigate(['/login'])
    )
   }

   addData1(data){
     console.log(data);
this.post1=data;
   } 
addData2(data)
{
this.post2=data;
}
addData3(data){
this.post3=data;
} 

ngOnInit() {
  }

}
