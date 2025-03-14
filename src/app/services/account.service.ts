import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterRequestDto, RegisterResponseDto} from '../dtos/account/register.dto';
import {ApiAddress} from '../utilities/api-address.utility';
import {ApiResponse} from '../dtos/common/api-response';
import {Observable} from 'rxjs';
import {LoginRequestDto} from '../dtos/account/login.dto';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) {
  }

  login(model: LoginRequestDto):Observable<ApiResponse<string>> {
    return this.httpClient.post<ApiResponse<string>>(ApiAddress.login, model);
  }

  register(model: RegisterRequestDto): Observable<ApiResponse<RegisterResponseDto>> {

    return this.httpClient.post<ApiResponse<RegisterResponseDto>>(ApiAddress.register, model);

  }

}
