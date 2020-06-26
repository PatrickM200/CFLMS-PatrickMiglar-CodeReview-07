import { Component, OnInit } from '@angular/core';
import { travel } from '../travel';
import { CartService } from '../cart.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  travel = travel;
  constructor( private cartService: CartService) { }

  addToCart(travel) {
    Swal.fire('Your product has been added to the cart!');
    this.cartService.addToCart(travel);
  }
 
  ngOnInit() {

  }
 
 }
