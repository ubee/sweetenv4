import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-startproject',
  templateUrl: './startproject.component.html',
  styleUrls: ['./startproject.component.css']
})
export class StartprojectComponent implements OnInit {
public renovation=[];
public jobtype;
public options;
renovationForm:FormGroup = new FormGroup({
  streetAddress:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9 .,-/]+')]),
  City:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]+')]),
  State:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z ]+')]),
  zip:new FormControl(null,[Validators.required,Validators.pattern('[0-9]+')]),
  renovation:new FormControl(null,Validators.required),
  Skills:new FormArray([])

});
  constructor(private _router:Router, private _userService:UserService) { 

    this.renovation=['Select','Yes,I own','In Contract','Representing Owner','Made an Offer','Looking To Buy','Renting','Other'];
    this.options=['Select','Architect','Interior Designer','Real Estate Agent','Developer','Building Manager','Relative','Other'];


  }

  ngOnInit() {
  }

  add(){
    if(this.renovationForm.value.renovation == "Representing Owner"){
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
      return <FormArray>this.renovationForm.get('Skills');
 
     }

     post1(){
      console.log(this.renovationForm.value);
      if(!this.renovationForm.valid){
        console.log('Invalid');
      }
      else{
      this._userService.post1(JSON.stringify(this.renovationForm.value))
      .subscribe(
        data=> {console.log(data); this._router.navigate(['/post2']);},
        error=>console.error(error)
      )
    } 
     }

}
