import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homerenovation2',
  templateUrl: './homerenovation2.component.html',
  styleUrls: ['./homerenovation2.component.css']
})
export class Homerenovation2Component implements OnInit {
  public renovation;
  public premium;
  public service;
  public help;
  public question;
  public styles;

  public post2;
  editrenovationForm:FormGroup = new FormGroup({
    renovation:new FormControl(null,Validators.required),
    reason:new FormControl(null,[Validators.required,Validators.pattern('(.|\s)*[a-zA-Z]+(.|\s)*')]),
    scope:new FormControl(null,[Validators.required,Validators.pattern('(.|\s)*[a-zA-Z]+(.|\s)*')]),
    squarefoot:new FormControl(null,[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(3)]),
    premium:new FormControl(null,Validators.required),
    style:new FormControl(null,Validators.required),
    service:new FormControl(null,Validators.required),
    budget1:new FormControl(null,[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(3)]),
    budget2:new FormControl(null,[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(3)]),
    help:new FormControl(null,Validators.required),
    question:new FormControl(null,Validators.required),
    url:new FormControl(null,Validators.required) 
  
  });
    constructor(private _router:Router, private _user:UserService) { 
      this.renovation=['Select','Entire Unit','2+ Spaces','1 Space','Custom Millwork'];
      this.premium=['Select','$$ BUDGET TO MID-GRADE','$$$ MID-GRADE TO HIGH-END','$$$$ HIGH-END TO LUXURY'];
      this.service=['Select',"BUILD","DESIGN","BUILD AND DESIGN"];
      this.help=['Select',"SWEETEN BUDGET CALCULATOR","GOT OTHER ESTIMATES","TALKED TO FRIENDS","DID RESEARCH","OTHER"];
      this.question=['Select',"yes","no"];
      this.styles=['Select',"Modern","Classic","Traditional","Other"];
  
      this._user.getpost1()
      .subscribe(
        data=>this.addData(data),
        error=>this._router.navigate(['/login'])
      )
  
    }

    addData(data){
this.post2=data 
console.log(this.post2);
  }

  ngOnInit() {
  }

  updatepost2(){
    console.log(this.editrenovationForm.value);
    if(!this.editrenovationForm.valid){
      console.log('Invalid');
    }
    else{
   this._user.updatepost2(JSON.stringify(this.editrenovationForm.value))
    .subscribe(
      data=> {console.log(data); this._router.navigate(['/edithomerenovation3']);},
      error=>console.error(error)
    )
    console.log(this.editrenovationForm.value);
  }
  }

}
