import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.scss']
})
export class Post2Component implements OnInit {
  public renovation;
  public premium;
  public service;
  public help;
  public question;
  public styles;
  renovationForm:FormGroup = new FormGroup({
   
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
    url:new FormControl(null,[Validators.required,Validators.pattern('^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}')]),
  });
    constructor(private _router:Router, private _userService:UserService) { 
      this.renovation=['Select','Entire Unit','2+ Spaces','1 Space','Custom Millwork'];
      this.premium=['Select','$$ BUDGET TO MID-GRADE','$$$ MID-GRADE TO HIGH-END','$$$$ HIGH-END TO LUXURY'];
      this.service=['Select',"BUILD","DESIGN","BUILD AND DESIGN"];
      this.help=['Select',"SWEETEN BUDGET CALCULATOR","GOT OTHER ESTIMATES","TALKED TO FRIENDS","DID RESEARCH","OTHER"];
      this.question=['Select',"yes","no"];
      this.styles=['Select',"Modern","Classic","Traditional","Other"];
  
  
  
    }
  
    ngOnInit() {
      window.scrollTo(0, 0);

    }
    post2(){
      console.log(this.renovationForm.value);
      if(!this.renovationForm.valid){
        console.log('Invalid');
      }
      else{
      this._userService.post2(JSON.stringify(this.renovationForm.value))
      .subscribe(
        data=> {console.log(data); this._router.navigate(['/property']);},
        error=>console.error(error)
      )
    } 
    }

}
