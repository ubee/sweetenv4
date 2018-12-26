import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contractor-list',
  templateUrl: './contractor-list.component.html',
  styleUrls: ['./contractor-list.component.scss']
})
export class ContractorListComponent implements OnInit {
  public contractor=[];

  constructor(private _user:UserService, private _router:Router) { 
    this._user.getAllcontractors()
    .subscribe(
      data=>this.addData(data),
      error=>this._router.navigate(['/login'])
    )
  }
  addData(data){
    this.contractor=data;
    console.log(this.contractor);
       }
  
  ngOnInit() {
  }

  assignproject(cid:string,cemail:string){
    this._user.setAssignContractorId(cid,cemail);
    console.log(cid);
    this._user.setProjectStatus().subscribe(data=>console.log(data),
    error=>console.log(error)
  )
   this._user.AssignProject().subscribe(
   data=>{console.log(data);this._router.navigate(['/dashboard'])},
   error=>this._router.navigate(['/dashboard']))
  }

}
