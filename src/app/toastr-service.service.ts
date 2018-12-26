import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToastrServiceService {
  constructor(private toastr: ToastrService) {}
 
  showSuccess() {
    this.toastr.success('Congratulations you have successfully login to Sweeten!','Login Sucessful');
  }
}
