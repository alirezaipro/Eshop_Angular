import { HttpInterceptorFn } from '@angular/common/http';
import {ApiAddress} from '../utilities/api-address.utility';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {

  if(!req.url.startsWith("http")){

    var modifiedUrl=req.clone({
      url:`${ApiAddress.baseAddress}${req.url}`
    });

    return next(modifiedUrl);

  }else{
    return next(req);
  }
};
