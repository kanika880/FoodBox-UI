import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartapiService } from 'src/app/service/cartapi.service';
import { OrderapiService } from 'src/app/service/orderapi.service';
import { ProductapiService } from 'src/app/service/productapi.service';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public cart : any;
public products! : any[];

  constructor(private router : Router, private userService : UserService, private cartapiService : CartapiService, private productapiService : ProductapiService, private orderapiService : OrderapiService) { }

  ngOnInit(): void {
    let username = sessionStorage.getItem("username");
    if(username != null){
      this.cartapiService.getCarts().subscribe((res) => {
        let cartArray = Object.values(res);
        for(let c in cartArray){
          if(cartArray[c]["user"]["username"] == username){
            this.products = cartArray[c]["products"];
            this.cart = cartArray[c];
            break;
          }
        }
      },
      (error) => {
        console.log(error);
      });
    }
  }
  deleteClick(product : any){
    this.products = this.products.filter(obj => obj !== product);
    this.cart["products"] = this.products;
    this.cartapiService.updateCart(this.cart, this.cart["id"]).subscribe((res) => {
      console.log(res);
      window.location.reload;
    },
    (error) => {
      console.log(error);
    });
  }

  onOrder(){
    this.router.navigate(["/orderdetails"]);
  }
}
