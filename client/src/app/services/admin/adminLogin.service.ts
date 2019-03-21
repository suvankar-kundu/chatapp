import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';
import { AppSettings } from '../../helpers';
import { Login } from '../../models/login';


@Injectable({
    providedIn: 'root'
})
export class AdminLoginService {

    constructor(private http: HttpClient) {
    }

    adminLogin(login: Login): Observable<any> {
        return this.http.post<any>(AppSettings.API_ENDPOINT + 'admin/login', login)
            .map(response => {
                localStorage.setItem('token', response.result.user.token);
                localStorage.setItem('isLoggedIn', "true");
                return response;
            });
    }
}