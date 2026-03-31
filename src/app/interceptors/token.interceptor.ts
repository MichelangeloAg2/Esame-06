import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const auth = localStorage.getItem('auth');

    if (!auth) {
      return next.handle(req);
    }

    const authObj = JSON.parse(auth);

    if (!authObj.tk) {
      return next.handle(req);
    }

    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authObj.tk}`
      }
    });

    return next.handle(cloned);
  }
}