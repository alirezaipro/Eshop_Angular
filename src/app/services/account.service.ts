import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginDto} from '../dtos/account/login.dto';
import {RegisterRequestDto, RegisterResponseDto} from '../dtos/account/register.dto';
import {ApiAddress} from '../utilities/api-address.utility';
import {ApiResponse} from '../dtos/common/api-response';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) {
  }

  login(model: LoginDto) {

  }

  register(model: RegisterRequestDto):Observable<ApiResponse<RegisterResponseDto>> {

    return this.httpClient.post<ApiResponse<RegisterResponseDto>>(ApiAddress.register, model);

  }

}
