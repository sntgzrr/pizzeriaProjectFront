import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { StartComponent } from './start/start.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path:"", redirectTo:"/login", pathMatch:"full"},
  {path:"login", component:LogInComponent},
  {path:"start", component:StartComponent},
  {path:"menu", component:MenuComponent},
  {path:"register", component:RegisterComponent},
  {path:"order", component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
