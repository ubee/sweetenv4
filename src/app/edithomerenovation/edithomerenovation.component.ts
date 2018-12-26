import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {FormGroup,FormControl,Validators, FormArray} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edithomerenovation',
  templateUrl: './edithomerenovation.component.html',
  styleUrls: ['./edithomerenovation.component.css']
})
export class EdithomerenovationComponent implements OnInit {
  public renovations=[];
  public jobtype;
  public options;
  public post1;
  public ren;
  editrenovationForm:FormGroup = new FormGroup({
  streetAddress:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9 .,-/]+')]),
  City:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]+')]),
  State:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]+')]),
  zip:new FormControl(null,[Validators.required,Validators.pattern('[0-9]+')]),
  renovation:new FormControl(null,Validators.required),
  Skills:new FormArray([])
  
  });
    constructor(private _router:Router, private _user:UserService) { 
  
     
    
      this.renovations=["Select",'Yes,I own','In Contract','Representing Owner','Made an Offer','Looking To Buy','Renting','Other'];
      this.options=["Select",'ARCHITECT','INTERIOR DESIGNER','REAL ESTATE AGENT','DEVELOPER','BUILDING MANAGER','Relative','Other'];
  
      this._user.getpost1()
      .subscribe(
        data=>this.addData(data),
        error=>this._router.navigate(['/login'])
      )
  
    }
    addData(data){
    this.post1=data;
    console.log(this.post1);
    }

    add(){
      if(this.editrenovationForm.value.renovation == "Representing Owner"){
        this.addSkills() ;   }
    }
    addSkills(){
      // (<FormArray>this.postjobForm.get('Skills')).push(new FormControl(''));
      this.skillsArray.push(this.addSkillgroup());
     }
     deleteSkills(index){
       //(<FormArray>this.postjobForm.get('Skills')).removeAt(index);
       this.skillsArray.removeAt(index);
     }
   
       addSkillgroup(){
         return new FormGroup({
           relation:new FormControl(),
          
         });
       }
   
       get skillsArray(){
        return <FormArray>this.editrenovationForm.get('Skills');
   
       }
  

  ngOnInit() {
  

  }

  updatep1(){
    console.log(this.editrenovationForm.value);
    if(!this.editrenovationForm.valid){
      console.log('Invalid');
    }
    else{
   this._user.updatepost1(JSON.stringify(this.editrenovationForm.value))
    .subscribe(
      data=> {console.log(data); this._router.navigate(['/edithomerenovation2']);},
      error=>console.error(error)
    )
    console.log(this.editrenovationForm.value);
  } 
   }

}
