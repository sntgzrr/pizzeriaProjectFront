import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../model/client';
import { Observable } from 'rxjs';
import { Pizza } from '../model/pizza';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url: string ="https://pizzeriaproject.fly.dev/clients";
  client: Client = new Client;
  pizza: Pizza = new Pizza();

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

  transferDataClient(client:Client){ 
    this.client = client;
  }

  getTransferDataClient(){
    return this.client;
  }

  transferDataPizza(pizza:Pizza){
    this.pizza = pizza;
  }

  getTransferDataPizza(){
    return this.pizza;
  }

}
