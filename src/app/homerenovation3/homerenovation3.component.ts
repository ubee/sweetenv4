import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import {saveAs} from 'file-saver';

const uri = 'http://127.0.0.1:3000/users/upload';
const uri2 = 'http://127.0.0.1:3000/users/uploadInpiration';

@Component({
  selector: 'app-homerenovation3',
  templateUrl: './homerenovation3.component.html',
  styleUrls: ['./homerenovation3.component.css']
})
export class Homerenovation3Component implements OnInit {
  uploader:FileUploader = new FileUploader({url:uri});
  uploader2:FileUploader = new FileUploader({url:uri2});

  attachmentList:any = [];
  public renovation;
  public premium;
  public service;
  public help;
  public question;
  public post3;
  editrenovationForm:FormGroup = new FormGroup({
   
    type:new FormControl(null,Validators.required),
    condition:new FormControl(null,Validators.required),
    firstname:new FormControl(null,Validators.required),
    lastname:new FormControl(null,Validators.required),
    number:new FormControl(null,Validators.required),
    available:new FormControl(null,Validators.required),
    date:new FormControl(null,Validators.required)  
  
  });
    constructor(private _router:Router, private _userService:UserService) { 
      this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
        this.attachmentList.push(JSON.parse(response));
    }
    this.uploader2.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
      this.attachmentList.push(JSON.parse(response));
  }

    this.renovation=['APARTMENT','TOWNHOUSE','HOUSE','MULTIPLE UNITS','OTHER'];
    this.premium=['$$ BUDGET TO MID-GRADE','$$$ MID-GRADE TO HIGH-END','$$$$ HIGH-END TO LUXURY'];
    this.service=["BUILD","DESIGN","BUILD AND DESIGN"];
    this.help=["SWEETEN BUDGET CALCULATOR","GOT OTHER ESTIMATES","TALKED TO FRIENDS","DID RESEARCH","OTHER"];
    this.question=["yes","no"];
    
    this._userService.getpost1()
    .subscribe(
      data=>this.addData(data),
      error=>this._router.navigate(['/login'])
    )
    }

    addData(data){
      this.post3=data; 
      console.log(this.post3);
        }
      
        updateproject(){
          console.log(this.editrenovationForm.value);
          if(!this.editrenovationForm.valid){
            console.log('Invalid');
          }
          else{
         this._userService.updatepost3(JSON.stringify(this.editrenovationForm.value))
          .subscribe(
            data=> {console.log(data); this._router.navigate(['/user']);},
            error=>console.error(error)
          )
          console.log(this.editrenovationForm.value);
        }
        }
  ngOnInit() {
  }

}
