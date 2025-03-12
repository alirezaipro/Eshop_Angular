import {Component} from '@angular/core';
import {RegisterRequestDto} from '../../dtos/account/register.dto';
import {FormsModule} from '@angular/forms';
import {AccountService} from '../../services/account.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  model: RegisterRequestDto = {
    mobile: '',
    lastName: '',
    password: '',
    email: '',
    firstName: ''
  };

  constructor(
    private accountService: AccountService,
    private toastrService:ToastrService,
    private router:Router
    ) {
  }

  onRegisterUser() {
    this.accountService.register(this.model).subscribe((response)=>{

      if(response.isSuccess){

        this.toastrService.success(response.message,'موفق');
        setTimeout(()=>{
          this.router.navigate(['/login']);
        },3000);

      } else {

        this.toastrService.error(response.message,'خطا');

      }

    })
  }

}
