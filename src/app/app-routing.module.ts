import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { OffersComponent } from './offers/offers.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'offers', component: OffersComponent},
  {path: 'cart', component: CartComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: '**', redirectTo: '/home'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
