import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-businessprojectview',
  templateUrl: './businessprojectview.component.html',
  styleUrls: ['./businessprojectview.component.scss']
})
export class BusinessprojectviewComponent implements OnInit {
public post1=[];
  constructor(private _user:UserService, private _router:Router) {
    this._user.getBusinessProject1().subscribe(
      data=>this.addData1(data),
      error=>this._router.navigate(['/login'])
    )
   }

  ngOnInit() {
  }
  addData1(data){
this.post1=data;
  }

}
