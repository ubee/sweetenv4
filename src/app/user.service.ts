import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class UserService {

  public editid;
  public vbid;
  public cemail;
  public editid2;
  public user_id;
  public editid3;
  public ViewProjectId;
  public id1;
  public id2;
  public id3;
  public Assignid1;
  public Assignid2;
  public Assignid3;
  public cid;
  public contractorid;
  public rating;
  public ratingid;
  public tid1;
  public tid2;
  public tid3;
  public getTDid;
  public beditid;
  public AssignBPId;
  public contractor_detail_id;

  constructor(private _http:HttpClient) { }

  register(body:any){
    var Type="client";
    return this._http.post('http://127.0.0.1:3000/users/register',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  check(body:any){
    return this._http.post('http://127.0.0.1:3000/users/check',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  getclientsProject()
{
  return this._http.get('http://127.0.0.1:3000/users/getclientProject'+`/${this.ViewProjectId}`,{
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  })
}
getProjectinfo(id:string)
{
  return this._http.get('http://127.0.0.1:3000/users/getProjectinfo'+`/${id}`,{
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  })
}
getclientsProject2()
{
  return this._http.get('http://127.0.0.1:3000/users/getclientProject2'+`/${this.ViewProjectId}`,{
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  })
}
getclientsProject3()
{
  return this._http.get('http://127.0.0.1:3000/users/getclientProject3'+`/${this.ViewProjectId}`,{
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  })
}
getAllProject1(){
  return this._http.get('http://127.0.0.1:3000/users/getAllProject1',{
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  })
}
getAllProject2(){
  return this._http.get('http://127.0.0.1:3000/users/getAllProject2',{
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  })
}
getAllProject3(){
  return this._http.get('http://127.0.0.1:3000/users/getAllProject3',{
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  })
}
getProject1(){
  return this._http.get('http://127.0.0.1:3000/users/getProject1'+`/${this.id1}`,{
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  })
}
getProject2(){
  return this._http.get('http://127.0.0.1:3000/users/getProject2'+`/${this.id2}`,{
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  })
}
getProject3(){
  return this._http.get('http://127.0.0.1:3000/users/getProject3'+`/${this.id3}`,{
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  })
}
getAssignedPId(){
  return this._http.get('http://127.0.0.1:3000/users/getAssignedPId',{
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  })
}


  ContractorRegister(body:any){
    var Type="contractor";
    return this._http.post('http://127.0.0.1:3000/users/register'+`/${Type}`,body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  setEditId(id:string){
     this.editid=id;
  
     
  }
  setAssignedContractorId(id:string){
   this.contractorid=id;
  }
  getAssignedProjectId(){
    return this._http.get('http://127.0.0.1:3000/users/getAssignedProjectId'+`/${this.contractorid}`,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  setRating(){
    return this._http.get('http://127.0.0.1:3000/users/contractorRating'+`/${this.rating}`+`/${this.ratingid}`,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });

  }
  setAssignProjectId(id:string,userid:string){
    this.Assignid1=id;
    this.user_id=userid;
   

  }
  setProjectStatus(){
    return this._http.get('http://127.0.0.1:3000/users/setProjectStatus'+`/${this.Assignid1}`,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });

  }
  setAssignContractorId(id:string,cemail:string){
    this.cid=id;
    this.cemail=cemail;
  }
  AssignProject(){
    return this._http.get('http://127.0.0.1:3000/users/AssignProject'+`/${this.Assignid1}`+`/${this.cid}`+`/${this.cemail}`+`/${this.user_id}`,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
  gettype(){
    return this._http.get('http://127.0.0.1:3000/users/gettype',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
  

  login(body:any){
    return this._http.post('http://127.0.0.1:3000/users/login',body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  adminlogin(body:any){
    return this._http.post('http://127.0.0.1:3000/users/adminlogin',body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  setViewProjectId(id:string){
    this.ViewProjectId=id;
  }
  setBusinessEditId(id:string){
    this.beditid=id;
  }
  setViewProjects(id1:string){
    this.id1=id1;
  }
  setContractorDetailId(id:string){
   this.contractor_detail_id=id;
  }
  user(){
    return this._http.get('http://127.0.0.1:3000/users/user',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

  homerenovationinfo1(){
    return this._http.get('http://127.0.0.1:3000/users/homerenovationinfo1',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

  getcDetail()
{
  return this._http.get('http://127.0.0.1:3000/users/getcDetail'+`/${this.contractor_detail_id}`,{
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  })
} 
 homerenovationinfo2(){
    return this._http.get('http://127.0.0.1:3000/users/homerenovationinfo2',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
  homerenovationinfo3(){
    return this._http.get('http://127.0.0.1:3000/users/homerenovationinfo3',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
  getpost1(){
    return this._http.get('http://127.0.0.1:3000/users/getpost1'+`/${this.editid}`,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
  getcinfo(id:string){
    return this._http.get('http://127.0.0.1:3000/users/getcinfo'+`/${id}`,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
  getpost2(){
    return this._http.get('http://127.0.0.1:3000/users/getpost2'+`/${this.editid2}`,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

  getpost3(){
    return this._http.get('http://127.0.0.1:3000/users/getpost3'+`/${this.editid3}`,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

  getclients(){
    return this._http.get('http://127.0.0.1:3000/users/getclients',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
  getAllclients(){
    return this._http.get('http://127.0.0.1:3000/users/getAllclients',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
  getAllcontractors(){
    return this._http.get('http://127.0.0.1:3000/users/getAllcontractors',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

  getcontractors(){
    return this._http.get('http://127.0.0.1:3000/users/getcontractors',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }



  logout(){
    return this._http.get('http://127.0.0.1:3000/users/logout',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

  getinspirationphoto(){
    return this._http.get('http://127.0.0.1:3000/users/getinspirationphoto',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
  getbeforephoto(){
    return this._http.get('http://127.0.0.1:3000/users/getbeforephoto',{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
  post1(body:any){
    return this._http.post('http://127.0.0.1:3000/users/post1',body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  post2(body:any){
    return this._http.post('http://127.0.0.1:3000/users/post2',body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  post3(body:any){
    return this._http.post('http://127.0.0.1:3000/users/post3',body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  verify(body:any){
    return this._http.post('http://127.0.0.1:3000/users/verify',body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  updatepost1(body:any){
    return this._http.post('http://127.0.0.1:3000/users/updatepost1'+`/${this.editid}`,body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  updatepost2(body:any){
    return this._http.post('http://127.0.0.1:3000/users/updatepost2'+`/${this.editid}`,body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  updatepost3(body:any){
    return this._http.post('http://127.0.0.1:3000/users/updatepost3'+`/${this.editid}`,body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }

  deletepost1(id: string){
    return this._http.delete('http://127.0.0.1:3000/users/deletepost1'+`/${id}`,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }

  deletepost2(id: string){
    return this._http.delete('http://127.0.0.1:3000/users/deletepost2'+`/${id}`,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
  deletepost3(id: string){
    return this._http.delete('http://127.0.0.1:3000/users/deletepost3'+`/${id}`,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
  setRatingInfo(rating:number,id:string){
 this.rating=rating;
 this.ratingid=id;
  }
  setTodolistid(id1:string,id2:string,id3:string){
    this.tid1=id1;
    this.tid2=id2;
    this.tid3=id3;
  }

  savetodolist(body:any){
    return this._http.post('http://127.0.0.1:3000/users/savetodolist'+`/${this.getTDid}`,body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  updatetodolist(body:any){
    return this._http.post('http://127.0.0.1:3000/users/updatetodolist'+`/${this.getTDid}`,body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  saveBacktodolist(body:any){
    return this._http.post('http://127.0.0.1:3000/users/saveBacktodolist'+`/${this.getTDid}`,body,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
  }
  getTodolist(){
    return this._http.get('http://127.0.0.1:3000/users/getTodolist'+`/${this.getTDid}`,{
      observe:'body',
      withCredentials:true,
      headers:new HttpHeaders().append('Content-Type','application/json')
    })
  }
  setgetToDolistid(id:string){
    this.getTDid=id;
  }
  postBusiness(body:any)
{
  return this._http.post('http://127.0.0.1:3000/users/postBusiness',body,{
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  });
}
getBusinessProject()
{
  return this._http.get('http://127.0.0.1:3000/users/getBusinessProject',{
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  })
}
getBR(){
  return this._http.get('http://127.0.0.1:3000/users/getBR'+`/${this.beditid}`,{
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  })
}
getBusinessRenovationProject()
{
  return this._http.get('http://127.0.0.1:3000/users/getBusinessRenovationProject',{
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  })
}
deleteBusiness(id: string){
  return this._http.delete('http://127.0.0.1:3000/users/deleteBusiness'+`/${id}`,{
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  })
}
updateBusiness(body:any){
  return this._http.post('http://127.0.0.1:3000/users/updateBusiness'+`/${this.beditid}`,body,{
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  });
}
setAssignBusinessProjectId(id:string){
this.Assignid1=id;
}
setViewBusinessProjectId(id:string){
this.vbid=id;
}
getBusinessProject1(){
  return this._http.get('http://127.0.0.1:3000/users/getBusinessProject1'+`/${this.vbid}`,{
    observe:'body',
    withCredentials:true,
    headers:new HttpHeaders().append('Content-Type','application/json')
  })
}
}
