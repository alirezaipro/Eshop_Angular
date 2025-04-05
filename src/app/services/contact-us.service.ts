import {Injectable} from '@angular/core';
import {CreateContactusRequestDto, CreateContactusResponseDto} from '../dtos/contact-us/create-contactus.dto';
import {HttpClient} from '@angular/common/http';
import {ApiAddress} from '../utilities/api-address.utility';
import {ApiResponse} from '../dtos/common/api-response';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private httpClient: HttpClient) {
  }

  create(model: CreateContactusRequestDto):Observable<ApiResponse<CreateContactusResponseDto>> {

    return this.httpClient.post<ApiResponse<CreateContactusResponseDto>>(ApiAddress.contactUs,model)

  }

}
