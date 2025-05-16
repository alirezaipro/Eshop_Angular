import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiAddress} from '../utilities/api-address.utility';
import {ApiResponse} from '../dtos/common/api-response';
import BlogListDto from '../dtos/blog/blog-list.dto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<ApiResponse<BlogListDto[]>> {

    return this.httpClient.get<ApiResponse<BlogListDto[]>>(ApiAddress.blogs);

  }
}
