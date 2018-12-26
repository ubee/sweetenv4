import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
//import { post } from 'selenium-webdriver/http';




@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
//  public imageuri = 'http://127.0.0.1:3000/uploads';
  

  username:String='';
  usertype:String='';

  animal: String;
  name: String;
  public homerenovationdata1=[];
  public homerenovationdata2=[];
  public homerenovationdata3=[];
  public homeinfo=[];
  public post2=[];
  public post3=[];
  public BusinessData=[];
public post2id;
public post3id;
public inspirationphoto=[];
public beforephoto=[];
  public showdiv:boolean= false;
  public showdiv2:boolean= false;
  public showPending:boolean=false;
  public data=[];

  public tasklist=[];
public pending=[];
  constructor(private _user:UserService, private _router:Router) { 
    this._user.user()
    .subscribe(
      data=>this.addName(data),
      error=>this._router.navigate(['/login'])
    )

    this._user.homerenovationinfo1()
    .subscribe(
      data=>[this.addhomerenovationinfo(data)],
      error=>this._router.navigate(['/login'])
    )



    this._user.getinspirationphoto()
    .subscribe(
      data=>this.Inspirationphoto(data),
      error=>this._router.navigate(['/login'])
    )
    this._user.getbeforephoto()
    .subscribe(
      data=>this.Beforephoto(data),
      error=>this._router.navigate(['/login'])
    )

    this._user.getBusinessRenovationProject()
    .subscribe(
      data=>this.BusinessData1(data),
      error=>this._router.navigate(['/login'])
    )
  }

BusinessData1(data)
{
  if(data!=""){
    this.showdiv2=true;
  }
  this.BusinessData=data;
  console.log(this.BusinessData);
}  

addName(data){
    this.username = data.username;
    this.usertype= data.usertype;
  }

  Inspirationphoto(data){
    this.inspirationphoto = data;
    console.log(this.inspirationphoto);
  }
  Beforephoto(data){
    this.beforephoto = data;
    console.log(this.beforephoto)
  }
  addhomerenovationinfo(data){
    this.data=data;
   this.data.forEach(element => {
    if(element!="" && element.status=="complete"){
      this.homerenovationdata1.push(element);
      this.showdiv=true;

      console.log(this.homerenovationdata1)
    }
    else if(element.status=="pending"){
      this.pending.push(element);
      this.showPending=true;
    }
   console.log(this.homerenovationdata1);
   console.log(this.pending);

     });
  
   
  }
  
 
  ngOnInit() {
  }

  logout(){
    this._user.logout()
    .subscribe(
      data=>{console.log(data);this._router.navigate(['/index-01'])},
      error=>console.error(error)
    )
  }
  delete(id:string){
    console.log(id);
    if (confirm('Are you sure to delete this record ?') == true) {
      this._user.deletepost1(id).subscribe((res) => {
      });
      this._router.navigate(['/user']);
    }
  }

  update(id:string){
    console.log(id);;
   this._user.setEditId(id);
    this._router.navigate(['/edithomerenovation']);

  }
  Todolist(id:string){
    console.log(id);
    console.log(id)
    this._user.setgetToDolistid(id);
    this._router.navigate(['/todolist']);

  }
  contractor(id:string){
    console.log(id);
    this._user.setContractorDetailId(id);

  this._router.navigate(['/contractor_detail']);
  }

  deleteBusiness(id:string){
    console.log(id);
    if (confirm('Are you sure to delete this record ?') == true) {
      this._user.deleteBusiness(id).subscribe((res) => {
      });
      this._router.navigate(['/user']);
    }
  }

  updateBusiness(id:string){
    console.log(id);
   this._user.setBusinessEditId(id);
    this._router.navigate(['/businessedit']);

  }

}
