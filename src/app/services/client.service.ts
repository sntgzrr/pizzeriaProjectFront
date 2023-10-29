import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../model/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url: string ="/clients";

  constructor(private http: HttpClient) { }

  getClients():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }

  newClient(client:Client): Observable<Client>{
    return this.http.post<Client>(this.url, client);
  }

  foundClient(email:string | undefined, password: string | undefined): Observable<Client>{
    return this.http.get<Client>(this.url+"/login?"+"email="+email+"&password="+password);
  }

}
