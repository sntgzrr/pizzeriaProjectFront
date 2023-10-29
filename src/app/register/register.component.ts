import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  
  client:Client = new Client();

  constructor(private clientService: ClientService, private router: Router){}

  ngOnInit() {
    
  }

  createClient(){
    this.clientService.newClient(this.client).subscribe(
      res=>this.router.navigate(['/start'])
    )
    console.log(this.client);
  }

}
