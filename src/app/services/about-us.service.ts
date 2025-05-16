import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiAddress} from '../utilities/api-address.utility';
import {ApiResponse} from '../dtos/common/api-response';
import AboutUsDto from '../dtos/about-us/about-us.dto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  constructor(private httpClient: HttpClient) {
  }

  get(): Observable<ApiResponse<AboutUsDto>> {
    return this.httpClient.get<ApiResponse<AboutUsDto>>(ApiAddress.aboutUs);
  }
}
