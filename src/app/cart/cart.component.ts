import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  travels;
  fullCart: boolean;
  travelPrice: number =0;
  totalCost;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
          this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }
 
  ngOnInit() {
  this.items = this.cartService.getItems();
  this.travels = this.cartService.getItems();
  this.fullCart = typeof this.travels != "undefined" && this.travels.length > 0;
  for (let nextTravel of this.travels) {
      this.travelPrice += Number(nextTravel.price);
  }
  if (this.travelPrice < 200){
    this.totalCost = `Total Price: ${this.travelPrice} €`;
  }
  else if (this.travelPrice >= 200 && this.travelPrice < 500 )
  {
    this.travelPrice = this.travelPrice * 0.9;
    this.totalCost = `Total Price (10% discount): ${this.travelPrice} €`;
  }else if(this.travelPrice >= 500)
  {
    this.travelPrice = this.travelPrice * 0.8;
    this.totalCost = `Total Price (20% discount): ${this.travelPrice} €`;
  }
  }
  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
 
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}

