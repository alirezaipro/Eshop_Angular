import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {LoginRequestDto} from '../../dtos/account/login.dto';
import {AccountService} from '../../services/account.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {ValidationMessageComponent} from '../../components/validation-message/validation-message.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ValidationMessageComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  model: LoginRequestDto = {
    email: '',
    password: ''
  };

  loginForm=new FormGroup({
    password: new FormControl(this.model.password, [Validators.required, Validators.minLength(8)]),
    email: new FormControl(this.model.email, [Validators.required, Validators.maxLength(300), Validators.email]),
  })

  constructor(private accountService: AccountService,
              private toastrService: ToastrService,
              private router: Router) {
  }

  onLoginUser() {
    if(!this.loginForm.invalid){
      this.accountService.login(this.model).subscribe(response => {
        if (response.isSuccess) {

          localStorage.setItem('jwt_token', response.data);
          this.toastrService.success(response.message, 'موفق');

          setTimeout(() => {
            this.router.navigate(['/']);
          }, 3000);

        } else {
          this.toastrService.error(response.message, 'خطا');
        }
      })
    }else{
      this.toastrService.error('لطفا اعتبارسنجی مربوط به هر فیلد را رعایت کنید.', 'خطا');
    }
  }

}
