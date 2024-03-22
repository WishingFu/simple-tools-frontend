import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  public host = 'http://192.168.100.102:8080/api';

  constructor(private http: HttpClient) { }

  public get<T>(url: string) : Promise<T> {
    return lastValueFrom(this.http.get<T>(`${this.host}${url}`));
  }

  public delete<T>(url: string, params: any): Promise<T> {
    return lastValueFrom(this.http.delete<T>(`${this.host}${url}`, {body: params}));
  }

  public getString(url: string) : Promise<string> {
    return lastValueFrom(this.http.get(`${this.host}${url}`, {responseType: 'text'}));
  }

}
