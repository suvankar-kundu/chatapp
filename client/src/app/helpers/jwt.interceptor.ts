import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs-compat/add/operator/do';
import 'rxjs-compat/add/operator/catch';
import 'rxjs-compat/add/observable/throw';
import 'rxjs-compat/add/operator/map';



@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        const started = Date.now();
        let isLoggedIn = localStorage.getItem('isLoggedIn');
        let token = localStorage.getItem('token');
        if (isLoggedIn && token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(request)
            .do(event => {
                if (event instanceof HttpResponse) {
                    const elapsed = Date.now() - started;
                    console.log(`Request for ${request.urlWithParams} took ${elapsed} ms.`);
                }
            })
            .catch(err => {
                const elapsed = Date.now() - started;
                console.log(`Request for ${request.urlWithParams} failed after ${elapsed} ms.`);
                return Observable.throw(err.error.message);
            });
    }
}