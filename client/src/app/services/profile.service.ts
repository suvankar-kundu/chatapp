import { DashboardComponent } from './../pages/dashboard/dashboard.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';
import { AppSettings } from '../helpers';


@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor(private http: HttpClient) {
    }

    projectInfo(data): Observable<any> {
        return this.http.post<any>(AppSettings.API_ENDPOINT + 'projectInfo',data)
            .map(response => {
                return response;
            });
    }

    accountInfo(data): Observable<any> {
      return this.http.post<any>(AppSettings.API_ENDPOINT + 'accountInfo',data)
          .map(response => {
              return response;
          });
  }

  overview(): Observable<any> {
    return this.http.get<any>(AppSettings.API_ENDPOINT + 'accounts')
        .map(response => {
            return response;
        });
}


}
