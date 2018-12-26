import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
//import { ToastrServiceService } from '../toastr-service.service';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {
  public user;
  public showError:boolean=false;

  loginForm : FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9 .,-]+'),Validators.maxLength(12)]),
  });
  constructor(private _router:Router, private _user:UserService) {
   
   }

  ngOnInit() {
  }

  login(){
    if(!this.loginForm.valid){
      console.log('Invalid');return;
    }

    // console.log(JSON.stringify(this.loginForm.value));
    this._user.adminlogin(JSON.stringify(this.loginForm.value))
    .subscribe(
      data=>[console.log(data),   // this.toastrService.showSuccess(),
        this._router.navigate(['/dashboard'])] ,
      error=>{console.log(error); this.showError=true;},
    )
  }
}
