import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public type=["client","contractor"];
  public showerror:boolean=false;
  public t="client";


  registerForm:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    username:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z .,-]+')]),
    password:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9 .,-]+'),Validators.maxLength(12)]),
    cpass:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9 .,-]+'),Validators.maxLength(12)]),
    type:new FormControl(null,[Validators.required]),
  })
  constructor(private _router:Router, private _userService:UserService,private toastr: ToastrService) {

   }

  ngOnInit() {

  }

  moveToLogin(){
    this._router.navigate(['/login']);
  }
  showSuccess() {
    this.toastr.success('Verify Your Email!', 'Success!');
  }
  showError() {
    this.toastr.error("Email Already Registered", 'Error!');
  }
  register(){
    if(!this.registerForm.valid || (this.registerForm.controls.password.value != this.registerForm.controls.cpass.value)){
      console.log('Invalid Form'); return;
    }
   
    this._userService.check(JSON.stringify(this.registerForm.value))
    .subscribe(
      data=> {console.log(data);
        if(data==null){this.checked()} 
        else{this.showerror=true;
          this.showError()}},
      error=>{this.checked();}

    )
  }

  checked(){
    this._userService.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data=> {console.log(data);this.showSuccess();setTimeout( () => {this._router.navigate(['/verify']);

    }, 3000 );},
      error=>{console.log(error);this.toastr.error("Failded To Register", 'Error!');
    }

    )
  }
}
