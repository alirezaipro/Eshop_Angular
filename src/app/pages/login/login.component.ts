import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginRequestDto} from '../../dtos/account/login.dto';
import {AccountService} from '../../services/account.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  model: LoginRequestDto = {
    email: '',
    password: ''
  };

  constructor(private accountService: AccountService,
              private toastrService: ToastrService,
              private router: Router) {
  }

  onLoginUser() {
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
  }

}
