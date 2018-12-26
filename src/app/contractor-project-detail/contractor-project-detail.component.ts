import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contractor-project-detail',
  templateUrl: './contractor-project-detail.component.html',
  styleUrls: ['./contractor-project-detail.component.scss']
})
export class ContractorProjectDetailComponent implements OnInit {
  public post1=[];

  constructor(private _user:UserService, private _router:Router) {
    this._user.getProject1().subscribe(
      data=>this.addData1(data),
      error=>this._router.navigate(['/login']));
   
   }
   addData1(data){
    this.post1=data;
       } 
    
  ngOnInit() {
  }

}
