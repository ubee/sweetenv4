import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

//import { ToastrServiceService } from '../toastr-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user;
  public type=["client","contractor"];


  loginForm : FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9 .,-]+'),Validators.maxLength(12)]),
    type:new FormControl(null,Validators.required),

  });
  constructor(private _router:Router, private _user:UserService,private toastr: ToastrService) { 

  }

  ngOnInit() {
  }

  moveToRegister(){
    this._router.navigate(['/register']);
  }

  login(){
    if(!this.loginForm.valid){
      console.log('Invalid');return;
    }
  

    // console.log(JSON.stringify(this.loginForm.value));
    this._user.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data=>{console.log(data);this.showSuccess();this.gettype(data);} ,
    error=>{console.log(error);this.showError();}   )
  }

  showSuccess() {
    this.toastr.success('Welcome to Sweeten!', 'Success!');
  }
  showError() {
    this.toastr.error('Wrong Username or Password!', 'Error!');
  }
  gettype(data){
   // this.toastrService.showSuccess();
    this._user.gettype()
    .subscribe(
      data=>this.addtype(data),
      error=>this._router.navigate(['/login'])
    )
}

addtype(data){
  this.user=data; 
  console.log(this.user[0].usertype);
  if(this.user[0].usertype == "client"){
   this._router.navigate(['/user']);
  }
   else if(this.user[0].usertype == "contractor")
   {
     this._router.navigate(['/contractorpage']);
   }
   else{
     this._router.navigate(['/login']);
 
   }
}

}
