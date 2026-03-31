import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authString = localStorage.getItem("auth");

    if (!authString) {
      return next.handle(req);
    }

    const auth = JSON.parse(authString);

    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${auth.tk}`
      }
    });

    return next.handle(cloned);
  }
}