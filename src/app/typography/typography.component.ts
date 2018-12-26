import { Component, OnInit, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  public clients=[];
  public rating:number;
  public showdiv:boolean=false;
public showMessage:boolean=false;
 
  constructor(private _user:UserService, private _router:Router) {
    this._user.getAllcontractors()
    .subscribe(
      data=>this.addData(data),
      error=>this._router.navigate(['/login'])
    )
   
   }

  ngOnInit() {
  }
  addData(data){
    if(data==""){
      this.showdiv=false;
      this.showMessage=true;
  
    }
    else{
      this.clients=data;
      this.showdiv=true;
  }
  console.log(this.clients);
     }
     addData1(data){
      console.log(this.clients);
      window.location.reload();

      //this._router.navigate(['/dashboard'])
         }
     onClick(rating: number,id:string): void {
      this.rating = rating;
      console.log(rating);
      console.log(id);
      this._user.setRatingInfo(rating,id);
      this._user.setRating().subscribe(data=>this.addData1(data),
      error=>this._router.navigate(['/dashboard'])
    )
      
    
    }

    viewproject(id:string){
     this._user.setAssignedContractorId(id);
     console.log(id);
     this._router.navigate(['/maps']);
    }

}
