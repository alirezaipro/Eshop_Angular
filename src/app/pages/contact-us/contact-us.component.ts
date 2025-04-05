import {Component} from '@angular/core';
import {ContactUsService} from '../../services/contact-us.service';
import {CreateContactusRequestDto} from '../../dtos/contact-us/create-contactus.dto';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  model: CreateContactusRequestDto = {
    mobile: '',
    email: '',
    firstName: '',
    lastName: '',
    title: '',
    description: ''
  }

  constructor(private contactUsService: ContactUsService,private toastrService: ToastrService,private router:Router) {
  }

  onCreateContactUs() {
    this.contactUsService.create(this.model).subscribe(response => {

      if(response.isSuccess){

        this.toastrService.success(response.message,'موفق');
        setTimeout(()=>{
          this.router.navigate(['/contact-us']);
        },3000);

      } else {

        this.toastrService.error(response.message,'خطا');

      }

    })
  }

}
