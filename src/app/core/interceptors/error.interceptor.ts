import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error=>{
        if(error instanceof HttpErrorResponse){
          if(error.error instanceof ErrorEvent){
            console.log('Error Event')
          }else{
            switch(error.status){
              case 401: //unauthorized
                console.log(error.statusText);
                this.toastr.error(`${error.statusText}`,'Authorization Error');
                break;
              case 403: //Forbidden
                console.log(error.statusText);
                this.toastr.error(`${error.statusText}`,'Access Error');
                break;
              case 404: //Not found
                console.log(error.statusText);
                this.toastr.error(`${error.statusText}`,'Route Error');
                break;
              case 503: //Server Error
                console.log(error.statusText);
                this.toastr.error(`${error.statusText}`,'Server Error');
                break;
            }
          }
        }else{
          console.log('An error occured');
        }
        return throwError(()=>new Error(error.statusText));
      }))
    );
  }
}
