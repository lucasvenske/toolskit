import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url = "http://localhost:3000"

  constructor(
    private http: HttpClient
  ) { }
  public composeHeaders() {
    const token = localStorage.getItem('token') as string;
    const headers = new HttpHeaders().set('Authorization', `bearer ${token}`);
    return headers;
  }
  authenticate(data: any) {
    return this.http.post(`${this.url}/login`, data);
  }

  refreshToken() {
    return this.http.post(`${this.url}/accounts/refresh-token`, null, { headers: this.composeHeaders() });
  }
}
