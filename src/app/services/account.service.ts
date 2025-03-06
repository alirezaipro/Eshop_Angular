import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginDto} from '../dtos/account/login.dto';
import {RegisterDto} from '../dtos/account/register.dto';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient:HttpClient) { }

  login(model:LoginDto){

  }

  register(model:RegisterDto){

  }

}
