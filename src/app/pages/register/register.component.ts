import {Component} from '@angular/core';
import {RegisterRequestDto} from '../../dtos/account/register.dto';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AccountService} from '../../services/account.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {NgIf} from '@angular/common';
import {ValidationMessageComponent} from '../../components/validation-message/validation-message.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    ValidationMessageComponent
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

  registerForm = new FormGroup({
    firstName: new FormControl(this.model.firstName, [Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    lastName: new FormControl(this.model.lastName, [Validators.required]),
    mobile: new FormControl(this.model.mobile, [Validators.required]),
    password: new FormControl(this.model.password, [Validators.required]),
    email: new FormControl(this.model.email, [Validators.required]),
});

  constructor(
    private accountService: AccountService,
    private toastrService: ToastrService,
    private router: Router
  ) {
  }

  onRegisterUser() {
    this.accountService.register(this.model).subscribe((response) => {

      if (response.isSuccess) {

        this.toastrService.success(response.message, 'موفق');
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);

      } else {

        this.toastrService.error(response.message, 'خطا');

      }

    })
  }

}
