import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '../model/pizza';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit{

  pizza: Pizza = new Pizza();
  mapPizzas = new Map<string, string>([
    ["peppPizza", "Hot-N-Ready Grande Pepperoni"],
    ["quesoPizza", "Hot-N-Ready Grande Queso"],
    ["hawaPizza","Hot-N-Ready Grande Hawaiana"],
    ["cheeseBread","Hot-N-Ready Pepperoni Cheese Bread"]
]);

mapPizzasPrice = new Map<string, number>([
  ["peppPizza",20000],
  ["quesoPizza",20000],
  ["hawaPizza",20000],
  ["cheeseBread",16900],
]);

  constructor(private router:Router, private clientService: ClientService){}
  ngOnInit() {
    
  }

  orderPeppPizza(){
    this.pizza.name = this.mapPizzas.get("peppPizza");
    this.pizza.price = this.mapPizzasPrice.get("peppPizza");
    this.clientService.transferDataPizza(this.pizza);
    this.router.navigate(['/order']);
  }

  orderQuesoPizza(){
    this.pizza.name = this.mapPizzas.get("quesoPizza");
    this.pizza.price = this.mapPizzasPrice.get("quesoPizza");
    this.clientService.transferDataPizza(this.pizza);
    this.router.navigate(['/order']);
  }

  orderHawaPizza(){
    this.pizza.name = this.mapPizzas.get("hawaPizza");
    this.pizza.price = this.mapPizzasPrice.get("hawaPizza");
    this.clientService.transferDataPizza(this.pizza);
    this.router.navigate(['/order']);
  }

  orderCheeseBread(){
    this.pizza.name = this.mapPizzas.get("cheeseBread");
    this.pizza.price = this.mapPizzasPrice.get("cheeseBread");
    this.clientService.transferDataPizza(this.pizza);
    this.router.navigate(['/order']);
  }

}
