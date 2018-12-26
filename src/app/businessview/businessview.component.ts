import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-businessview',
  templateUrl: './businessview.component.html',
  styleUrls: ['./businessview.component.scss']
})
export class BusinessviewComponent implements OnInit {
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
  public B;
  renovationForm:FormGroup = new FormGroup({
    streetAddress:new FormControl(null,[Validators.required]),
    City:new FormControl(null,[Validators.required]),
    State:new FormControl(null,[Validators.required]),
    zip:new FormControl(null,[Validators.required]),
    leaseduration:new FormControl(null,Validators.required),
    url:new FormControl(null),
    scope:new FormControl(null,Validators.required),
    squarefoot:new FormControl(null,Validators.required),
    style:new FormControl(null,Validators.required),
    budget1:new FormControl(null,Validators.required),
    budget2:new FormControl(null,Validators.required),
    req:new FormControl(null,Validators.required),
    question:new FormControl(null,Validators.required),
    firstname:new FormControl(null,Validators.required),
    lastname:new FormControl(null,Validators.required),
    number:new FormControl(null,Validators.required),
    startdate:new FormControl(null,Validators.required),
    deadline:new FormControl(null,Validators.required),
    info:new FormControl(null,Validators.required),
    projectname:new FormControl(null,Validators.required),
    renovationOptions:new FormControl(null,Validators.required) 
  });
  constructor(private _router:Router, private _user:UserService) {

    this.renovation=['Yes,I own','In Contract','Representing Owner','Made an Offer','Looking To Buy','Renting','Other'];
    this.options=['ARCHITECT','INTERIOR DESIGNER','REAL ESTATE AGENT','DEVELOPER','BUILDING MANAGER','Relative','Other'];
    this.duration=['12+ MONTHS','1-12 MONTHS','JUST GOT THE KEYS','STILL NEGOTIATING','LOOKING FOR A SPACE','OTHER']
    this.service=["BUILD","DESIGN","BUILD AND DESIGN"];
    this.help=["SWEETEN BUDGET CALCULATOR","GOT OTHER ESTIMATES","TALKED TO FRIENDS","DID RESEARCH","OTHER"];
    this.question=["yes","no","not sure"]
    this.styles=["Modern","Classic","Traditional","Other"];
    this.requirements=['$1 MILLION','$2 - $4 MILLION','$5 MILLION','$6 MILLION+','NO INSURANCE REQUIRED','NOT SURE']
    this.info=['TV COMMERCIAL','PRINT AD','SEARCHING FOR CONTRACTORS','SOCIAL MEDIA','FRIEND/FAMILY','SWEETEN BLOG','ARTICLE/PUBLICATION','SUBWAY AD','MAILER','OTHER']
    this.renovationOptions=['OFFICE','RETAIL SPACE','BAR/RESTAURANT','OTHER']
    this._user.getBR()
    .subscribe(
      data=>this.addData(data),
      error=>this._router.navigate(['/login'])
    )
   }

  ngOnInit() {
  
  }
  addData(data){
    this.B=data[0];
    console.log(this.B);
  }
  update(){
    console.log(this.renovationForm.value);
    if(!this.renovationForm.valid){
      console.log('Invalid');
    }
    else{
   this._user.updateBusiness(JSON.stringify(this.renovationForm.value))
    .subscribe(
      data=> {console.log(data); this._router.navigate(['/user']);},
      error=>console.error(error)
    )
    console.log(this.renovationForm.value);
  } 
  }

}
