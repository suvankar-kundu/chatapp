import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';
import { AppSettings } from '../helpers';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    fetchAdminList(): Observable<any> {
        return this.http.get<any>(AppSettings.API_ENDPOINT + 'admin/list')
            .map(response => {
                return response;
            });
    }

    adminCreate(user: any): Observable<any> {
        return this.http.post<any>(AppSettings.API_ENDPOINT + 'admin/create', user)
            .map(response => {
                return response;
            });
    }

    adminUpdate(user: any): Observable<any> {
        return this.http.post<any>(AppSettings.API_ENDPOINT + 'admin/update', user)
            .map(response => {
                return response;
            });
    }

    adminInactive(user: any): Observable<any> {
        return this.http.post<any>(AppSettings.API_ENDPOINT + 'admin/inactive', user)
            .map(response => {
                return response;
            });
    }

    resetPassword(password: any): Observable<any> {
        return this.http.post<any>(AppSettings.API_ENDPOINT + '/resetPassword', password)
            .map(response => {
                return response;
            });
    }
}