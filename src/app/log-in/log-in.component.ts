import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{

  client:Client = new Client();
  constructor(private clientSevice: ClientService, private router: Router){}
  ngOnInit() {
    
  }

  logIn(){
    this.clientSevice.foundClient(this.client.email, this.client.password).subscribe((data) => {
      console.log("Usuario: ", data);
      if(data){
        this.router.navigate(['/start'])
      }else{
        alert("¡El usuario no existe!")
      }
    });
  }
}
