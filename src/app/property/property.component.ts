import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import {saveAs} from 'file-saver';

const uri = 'http://18.221.185.99:3000/users/upload';
const uri2 = 'http://18.221.185.99:3000/uploadInpiration';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  uploader:FileUploader = new FileUploader({url:uri});
  uploader2:FileUploader = new FileUploader({url:uri2});

  attachmentList:any = [];
  public renovation;
  public premium;
  public service;
  public help;
  public question;
  renovationForm:FormGroup = new FormGroup({
   
    type:new FormControl(null,Validators.required),
    condition:new FormControl(null),
    firstname:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]{3,10}')]),
    lastname:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]{3,10}')]),
    number:new FormControl(null,[Validators.required,Validators.pattern('((\\+)|(00)|(\\*)|())[0-9]{3,14}((\\#)|())')]),
    available:new FormControl(null,[Validators.pattern('(.|\s)*[a-zA-Z]+(.|\s)*')]),
    date:new FormControl(null,Validators.required)
  
  
  
  
  
  
  });
    constructor(private _router:Router, private _userService:UserService) { 
      this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
        this.attachmentList.push(JSON.parse(response));
    }
    this.uploader2.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
      this.attachmentList.push(JSON.parse(response));
  }

    this.renovation=["Select",'APARTMENT','TOWNHOUSE','HOUSE','MULTIPLE UNITS','OTHER'];
    this.premium=["Select",'$$ BUDGET TO MID-GRADE','$$$ MID-GRADE TO HIGH-END','$$$$ HIGH-END TO LUXURY'];
    this.service=["Select","BUILD","DESIGN","BUILD AND DESIGN"];
    this.help=["Select","SWEETEN BUDGET CALCULATOR","GOT OTHER ESTIMATES","TALKED TO FRIENDS","DID RESEARCH","OTHER"];
    this.question=["Select","YES","NO"];

  
    }
  
    ngOnInit() {
      window.scrollTo(0, 0);
    }

  postproject(){
    console.log(this.renovationForm.value);
    if(!this.renovationForm.valid){
      console.log('Invalid');
    }
    else{
    this._userService.post3(JSON.stringify(this.renovationForm.value))
    .subscribe(
      data=> {console.log(data); this._router.navigate(['/user']);},
      error=>console.error(error)
    )
  } 
  }

}
