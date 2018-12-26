import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ReactiveFormsModule } from '@angular/forms';
import {UserService} from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { Index01Component } from './index-01/index-01.component';
import { Index02Component } from './index-02/index-02.component';
import { AboutUs01Component } from './about-us-01/about-us-01.component';
import { Blog01Component } from './blog-01/blog-01.component';
import { Portfolio01Component } from './portfolio-01/portfolio-01.component';
import { Services01Component } from './services-01/services-01.component';
import { ContactComponent } from './contact/contact.component';
import { StartprojectComponent } from './startproject/startproject.component';
import { PropertyComponent } from './property/property.component';
import { BusinessComponent } from './business/business.component';
import {FileUploadModule} from 'ng2-file-upload';
import { VerifyComponent } from './verify/verify.component';
import { OptionsComponent } from './options/options.component';
import { EdithomerenovationComponent } from './edithomerenovation/edithomerenovation.component';
import { Homerenovation2Component } from './homerenovation2/homerenovation2.component';
import { Homerenovation3Component } from './homerenovation3/homerenovation3.component';
import { ContractorRegisterComponent } from './contractor-register/contractor-register.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RatingComponent } from './rating/rating.component';
import { Post2Component } from './post2/post2.component';
import { ToastrServiceService } from 'app/toastr-service.service';
import { ContractorpageComponent } from './contractorpage/contractorpage.component';
import { ContractorProjectDetailComponent } from './contractor-project-detail/contractor-project-detail.component';
import { TodolistComponent } from './todolist/todolist.component';
import { ContractortodolistComponent } from './contractortodolist/contractortodolist.component';
import { BusinessviewComponent } from './businessview/businessview.component';
import { ToastrModule } from 'ngx-toastr';
import { ContractordetailpageComponent } from './contractordetailpage/contractordetailpage.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot({positionClass: 'toast-top-center',
  })

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    Index01Component,
    Index02Component,
    AboutUs01Component,
    Blog01Component,
    Portfolio01Component,
    Services01Component,
    ContactComponent,
    StartprojectComponent,
    Post2Component,
    PropertyComponent,
    BusinessComponent,
    VerifyComponent,
    OptionsComponent,
    EdithomerenovationComponent,
    Homerenovation2Component,
    Homerenovation3Component,
    ContractorRegisterComponent,
    AdminloginComponent,
    RatingComponent,
    ContractorpageComponent,
    ContractorProjectDetailComponent,
    TodolistComponent,
    ContractortodolistComponent,
    BusinessviewComponent,
    ContractordetailpageComponent,
  

  ],
  providers: [UserService,ToastrServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
