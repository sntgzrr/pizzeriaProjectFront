import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';
import { Pizza } from '../model/pizza';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  pizza: Pizza = new Pizza;
  mapPizzaNames = new Map<string, string>([
    ["combo1","Hot-N-Ready Grande Pepperoni + CocaCola"],
    ["combo2","Hot-N-Ready 2 Grande Pepperoni + CocaCola"],
    ["combo3","Hot-N-Ready Grande Vegetales +CocaCola +CrazyCombo"],
    ["combo4","Hot-N-Ready Grande Jalapeños +CocaCola +CrazyCombo"],
    ["mixPizza1","Hot-N-Ready Grande Carnes"],
    ["mixPizza2","Hot-N-Ready Mix "],
    ["puffs","Hot-N-Ready 4 Panes Rellenos de pepperoni"],
    ["dips","4 Salsas Ranchera Japaleño Queso Mantequilla de ajo"]
  ]);

  mapPizzaPrice = new Map<string, number>([
    ["combo1", 34000],
    ["combo2", 51000],
    ["combo3", 37000],
    ["combo4", 40000],
    ["mixPizza1", 50000],
    ["mixPizza2", 60000],
    ["puffs", 12000],
    ["dips", 3500]
  ]);

  constructor(private router:Router, private clientService: ClientService){}
  ngOnInit() {
      
  }

  orderCombo1(){
    this.pizza.name = this.mapPizzaNames.get("combo1");
    this.pizza.price = this.mapPizzaPrice.get("combo1");
    this.clientService.transferDataPizza(this.pizza);
    this.router.navigate(['/order']);
  }

  orderCombo2(){
    this.pizza.name = this.mapPizzaNames.get("combo2");
    this.pizza.price = this.mapPizzaPrice.get("combo2");
    this.clientService.transferDataPizza(this.pizza);
    this.router.navigate(['/order']);
  }

  orderCombo3(){
    this.pizza.name = this.mapPizzaNames.get("combo3");
    this.pizza.price = this.mapPizzaPrice.get("combo3");
    this.clientService.transferDataPizza(this.pizza);
    this.router.navigate(['/order']);
  }

  orderCombo4(){
    this.pizza.name = this.mapPizzaNames.get("combo4");
    this.pizza.price = this.mapPizzaPrice.get("combo4");
    this.clientService.transferDataPizza(this.pizza);
    this.router.navigate(['/order']);
  }

  orderMixPizza1(){
    this.pizza.name = this.mapPizzaNames.get("mixPizza1");
    this.pizza.price = this.mapPizzaPrice.get("mixPizza1");
    this.clientService.transferDataPizza(this.pizza);
    this.router.navigate(['/order']);
  }

  orderMixPizza2(){
    this.pizza.name = this.mapPizzaNames.get("mixPizza2");
    this.pizza.price = this.mapPizzaPrice.get("mixPizza2");
    this.clientService.transferDataPizza(this.pizza);
    this.router.navigate(['/order']);
  }

  orderPuffs(){
    this.pizza.name = this.mapPizzaNames.get("puffs");
    this.pizza.price = this.mapPizzaPrice.get("puffs");
    this.clientService.transferDataPizza(this.pizza);
    this.router.navigate(['/order']);
  }

  orderDips(){
    this.pizza.name = this.mapPizzaNames.get("dips");
    this.pizza.price = this.mapPizzaPrice.get("dips");
    this.clientService.transferDataPizza(this.pizza);
    this.router.navigate(['/order']);
  }
}
