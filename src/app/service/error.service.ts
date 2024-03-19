import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  //for centralized error handling
  errorHandler(error:HttpErrorResponse){
    console.log(error);
    let errMsg = '';
  
    if(!error.error || !error.error.error)
      errMsg = "There's an unknown error, please try again after some time!";
    else if(error.error.error == 'Permission Denied')
      errMsg = "You don't have permission to access this content";

    return throwError(()=>errMsg)  
  }
}
