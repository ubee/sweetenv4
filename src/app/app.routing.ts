import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { Index01Component } from './index-01/index-01.component';
import { Index02Component } from './index-02/index-02.component';
import { AboutUs01Component } from './about-us-01/about-us-01.component';
import { Blog01Component } from './blog-01/blog-01.component';
import { Portfolio01Component } from './portfolio-01/portfolio-01.component';
import { Services01Component } from './services-01/services-01.component';
import { ContactComponent } from './contact/contact.component';
import { StartprojectComponent } from './startproject/startproject.component';
import { Post2Component } from './post2/post2.component';
import { PropertyComponent } from './property/property.component';
import { BusinessComponent } from './business/business.component';
import { VerifyComponent } from './verify/verify.component';
import { OptionsComponent } from './options/options.component';
import { EdithomerenovationComponent } from './edithomerenovation/edithomerenovation.component';
import { Homerenovation2Component } from './homerenovation2/homerenovation2.component';
import { Homerenovation3Component } from './homerenovation3/homerenovation3.component';
import { ContractorRegisterComponent } from './contractor-register/contractor-register.component';
import { CommonModule } from '@angular/common';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ContractorpageComponent } from './contractorpage/contractorpage.component';
import { ContractorProjectDetailComponent } from './contractor-project-detail/contractor-project-detail.component';



import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ContractortodolistComponent } from './contractortodolist/contractortodolist.component';
import { BusinessviewComponent } from './businessview/businessview.component';
import { ContractordetailpageComponent } from './contractordetailpage/contractordetailpage.component';

const routes: Routes =[
  {path:'', redirectTo:'index-01', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'user',component:UserhomeComponent},
  {path:'index-01',component:Index01Component},
  {path:'index-02',component:Index02Component},
  {path:'aboutus',component:AboutUs01Component},
  {path:'portfolio',component:Portfolio01Component},
  {path:'services',component:Services01Component},
  {path:'blog',component:Blog01Component},
  {path:'contact',component:ContactComponent},
  {path:'startproject',component:StartprojectComponent},
  {path:'post2',component:Post2Component},
  {path:'property',component:PropertyComponent},
  {path:'business',component:BusinessComponent},
  {path:'verify',component:VerifyComponent},
  {path:'options',component:OptionsComponent},
  {path:'edithomerenovation',component:EdithomerenovationComponent},
  {path:'edithomerenovation2',component:Homerenovation2Component},
  {path:'edithomerenovation3',component:Homerenovation3Component},
  {path:'contractorRegister',component:ContractorRegisterComponent},
  {path:'adminlogin',component: AdminloginComponent},
  {path:'contractorpage',component: ContractorpageComponent},
  {path:'contractorprojectdetail',component: ContractorProjectDetailComponent },
  {path:'todolist',component: TodolistComponent },
  {path:'contractortodolist',component:ContractortodolistComponent},
  {path:'businessedit',component:BusinessviewComponent},
  {path:'contractor_detail',component:ContractordetailpageComponent},


  





  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
