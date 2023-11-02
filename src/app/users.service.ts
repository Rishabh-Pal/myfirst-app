import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  private baseURL = `http://127.0.0.1:3000/api/v1`;

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('accessToken');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }


  getAllTours(query: string): Observable<any> {
    return this.http.get(`${this.baseURL}/tours?${query}`, { headers: this.getHeaders() });
  }
  createTour(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/tours`, data, { headers: this.getHeaders() });
  }
  DeleteTours(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/tours/${id}`);
  }
  GetTours(id: string): Observable<any> {
    return this.http.get(`${this.baseURL}/tours/${id}`);
  }
  UpdateTours(data: any, id: string): Observable<any> {
    return this.http.patch(`${this.baseURL}/tours/${id}`, data);
  }
  TopTours(params: string): Observable<any> {
    return this.http.get(`${this.baseURL}/tours/top-5-cheap`);
  }
  Signup(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/users/signup`, data)
    .pipe(map((response: any) => {
      // Assuming the server returns an access token
      if (response.accessToken) {
        localStorage.setItem('accessToken', response.accessToken);
      }
      return response;
    }))
  }
  Login(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/users/login`, data, { headers: this.getHeaders() });
  }
  ForgetPassword(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/users/forgotPassword`, data);
  }
  ResetPassword(data: any, id: string): Observable<any> {
    return this.http.patch(`${this.baseURL}/users/resetPassword/${id}`, data);
  }
  UpdatePassword(data: any, id: string): Observable<any> {
    return this.http.patch(`${this.baseURL}/users/updateMyPassword`, data);
  }
  UpdateData(data: any, id: string): Observable<any> {
    return this.http.patch(`${this.baseURL}/users/updateMe`, data);
  }
  DeleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/users/deleteMe/${id}`);
  }
}
