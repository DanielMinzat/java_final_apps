import {Component, OnInit} from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {Router} from "@angular/router";
import {ListProductsComponent} from "../list-products/list-products.component";
import {CartButtonComponent} from "./cart-button/cart-button.component";
import {CustomerService} from "../services/customer.service";
import {NgIf} from "@angular/common";
import {ConfigurationsService} from "../services/configurations.service";
import {ReviewsComponent} from "../reviews/reviews.component";
import {ProductService} from "../services/product.service";
import {ContactFormComponent} from "../contact-form/contact-form.component";
import {SocialMediaButtonsComponent} from "../social-media-buttons/social-media-buttons.component";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    ListProductsComponent,
    CartButtonComponent,
    NgIf,
    ReviewsComponent,
    ContactFormComponent,
    SocialMediaButtonsComponent,
    MatFormField,
    MatInput,


  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{

  products: any[] = [];


  constructor(public appConfig: ConfigurationsService, private router:Router , private customerService:CustomerService, private productService: ProductService){

  }
  isUserAdmin(){
    if(this.customerService.getLoggedUser() != null && this.customerService.getLoggedUser().userRole == "ADMIN"){
      return true;
    }
    return false;

  }
  onDashboard(){
    this.router.navigate(['/','dashboard']);
  }
  onLogOut(){
    this.router.navigate(['/','auth']);
  }



// am adaugat asta
  ngOnInit(): void {
    this.productService.getProductList().subscribe((response: any) => {
      this.products = response.data;
    });
  }



}
