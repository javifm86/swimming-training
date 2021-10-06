import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./auth/model/user.model";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const strUser = localStorage.getItem('user');
    const user: User = strUser != null ? JSON.parse(strUser) : {};

    if (strUser != null) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + user.token)
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
