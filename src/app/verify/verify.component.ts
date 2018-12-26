import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';


@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  public showError:boolean=false;
  loginForm : FormGroup=new FormGroup({
    secretToken:new FormControl(null, Validators.required)
  });
  constructor(private _router:Router, private _user:UserService) {

   }

  ngOnInit() {
  }

  verify(){ 
    this._user.verify(JSON.stringify(this.loginForm.value))
    .subscribe(
      data=> {if(data==null){this.showError=true;}else{console.log(data); this._router.navigate(['/login']);}},
    error=>{console.error(error);this.showError=true;}
    )
  }
  
}
