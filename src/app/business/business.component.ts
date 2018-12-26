import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  public renovation=[];
  public jobtype;
  public options;
  public duration;
  public service;
  public help;
  public question;
  public styles;
  public requirements;
  public info;
  public renovationOptions;
  renovationForm:FormGroup = new FormGroup({
    streetAddress:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9 .,-/]+')]),
    City:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]+')]),
    State:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]+')]),
    zip:new FormControl(null,[Validators.required,Validators.pattern('[0-9]+')]),
    leaseduration:new FormControl(null,Validators.required),
    url:new FormControl(null),
    scope:new FormControl(null,[Validators.required,Validators.pattern('(.|\s)*[a-zA-Z]+(.|\s)*')]),
    squarefoot:new FormControl(null,[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(3)]),
    style:new FormControl(null,Validators.required),
    budget1:new FormControl(null,[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(3)]),
    budget2:new FormControl(null,[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(3)]),
    req:new FormControl(null,Validators.required),
    question:new FormControl(null,Validators.required),
    firstname:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]{3,10}')]),
    lastname:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]{3,10}')]),
    number:new FormControl(null,[Validators.required,Validators.pattern('((\\+)|(00)|(\\*)|())[0-9]{3,14}((\\#)|())')]),
    startdate:new FormControl(null,Validators.required),
    deadline:new FormControl(null,Validators.required),
    info:new FormControl(null,[Validators.required,Validators.pattern('(.|\s)*[a-zA-Z]+(.|\s)*')]),
    projectname:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]+')]),
    renovationOptions:new FormControl(null,Validators.required)




  
  



    




  
  });
    constructor(private _router:Router, private _userService:UserService) { 
  
      this.renovation=["Select",'Yes,I own','In Contract','Representing Owner','Made an Offer','Looking To Buy','Renting','Other'];
      this.options=["Select",'ARCHITECT','INTERIOR DESIGNER','REAL ESTATE AGENT','DEVELOPER','BUILDING MANAGER','Relative','Other'];
      this.duration=["Select",'12+ MONTHS','1-12 MONTHS','JUST GOT THE KEYS','STILL NEGOTIATING','LOOKING FOR A SPACE','OTHER']
      this.service=["Select","BUILD","DESIGN","BUILD AND DESIGN"];
      this.help=["Select","SWEETEN BUDGET CALCULATOR","GOT OTHER ESTIMATES","TALKED TO FRIENDS","DID RESEARCH","OTHER"];
      this.question=["Select","yes","no","not sure"]
      this.styles=["Select","Modern","Classic","Traditional","Other"];
      this.requirements=["Select",'$1 MILLION','$2 - $4 MILLION','$5 MILLION','$6 MILLION+','NO INSURANCE REQUIRED','NOT SURE']
      this.info=["Select",'TV COMMERCIAL','PRINT AD','SEARCHING FOR CONTRACTORS','SOCIAL MEDIA','FRIEND/FAMILY','SWEETEN BLOG','ARTICLE/PUBLICATION','SUBWAY AD','MAILER','OTHER']
      this.renovationOptions=["Select",'OFFICE','RETAIL SPACE','BAR/RESTAURANT','OTHER']
  
    }
  
    ngOnInit() {
    }
  
  
       post1(){
        console.log(this.renovationForm.value);
        if(!this.renovationForm.valid){
          console.log('Invalid');
        }
        else{
        this._userService.postBusiness(JSON.stringify(this.renovationForm.value))
        .subscribe(
          data=> {console.log(data); this._router.navigate(['/user']);},
          error=>console.error(error)
        )
      } 
       }
  
  }

  
