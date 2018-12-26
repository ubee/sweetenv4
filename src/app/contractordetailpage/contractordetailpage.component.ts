import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contractordetailpage',
  templateUrl: './contractordetailpage.component.html',
  styleUrls: ['./contractordetailpage.component.scss']
})
export class ContractordetailpageComponent implements OnInit {
public contractorid=[];
public appinfo=[];
  constructor(private _user:UserService, private _router:Router) { 
    this._user.getcDetail()
    .subscribe(
      data=>this.addData(data),
      error=>this._router.navigate(['/login'])
    )
  }

  ngOnInit() {
  }
addData(data){
  this.contractorid=data;
  this.contractorid.forEach(element => {
    this._user.getcinfo(element.contractor_id).subscribe(
     data=>{console.log(data[0]);this.appinfo.push(data[0])},
     error=>this._router.navigate(['/login'])
   )
   });

   console.log(this.appinfo);
}
}
