import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { AppSettings } from '../helpers';
@Injectable()
export class AuthService {
    constructor(private _http: HttpClient) {
    }
  
    logout(): void {
        localStorage.setItem('isLoggedIn', "false");
        localStorage.removeItem('token');
    }

    authLogin(logindata: Login): Observable<any> {
        return this._http.post<any>(AppSettings.API_ENDPOINT + 'signin', logindata)
            .map(response => {
                localStorage.setItem('token', response.token);
                localStorage.setItem('isLoggedIn', "true");
                return response;
            });
    }
    
    registration(regdata: any): Observable<any> {
        return this._http.post<any>(AppSettings.API_ENDPOINT + 'signup', regdata)
            .map(response => {
                localStorage.setItem('token', response.token);
                localStorage.setItem('isLoggedIn', "true");
                return response;
            });
    }

    forgotPassword(data){
        return this._http.post<any>(AppSettings.API_ENDPOINT + 'forgotPassword', data)
        .map(response => {
            return response;
        });
    }
    resetPassword(data){
        return this._http.post<any>(AppSettings.API_ENDPOINT + 'resetPassword/' + data.token, data)
        .map(response => {
            return response;
        });
    }
  
}