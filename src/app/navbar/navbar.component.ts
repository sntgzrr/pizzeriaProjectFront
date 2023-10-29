import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../model/client';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  client: Client = new Client;

  constructor(private clientService: ClientService){}

  ngOnInit() {
      this.client = this.clientService.getTransferDataClient();
  }
}
