import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
import {MatCard, MatCardContent} from "@angular/material/card";
import {NgClass, NgForOf, NgIf, TitleCasePipe} from "@angular/common";
import {MatButton, MatIconButton} from "@angular/material/button";
import {OrderService} from "../services/order.service";
import {CustomerService} from "../services/customer.service";
import {Router} from "@angular/router";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {appConfig} from "../app.config";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {CartButtonComponent} from "../home/cart-button/cart-button.component";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  standalone: true,
  imports: [
    MatCardContent,
    MatCard,
    TitleCasePipe,
    NgIf,
    NgForOf,
    MatButton,
    NgClass,
    MatToolbar,
    MatIcon,
    MatFormField,
    MatInput,
    MatIconButton,
    CartButtonComponent
  ],
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  @Input() isAdmin: boolean = false;
  @Output() changeData = new EventEmitter<any>();

  products: any[] = [];
  currentIndex: number = 0;
  transitioning: boolean = false;



  constructor(
    private productService: ProductService,
    private orderService: OrderService,
    private customerService: CustomerService,
    private router: Router
  ) {
    this.productService.getProductList().subscribe((productList: Array<any>) => {
      this.products = productList;
    });
  }

  ngOnInit(): void {
    this.productService.getProductList().subscribe((productList: any[]) => {
      this.products = productList;
    });
  }

  getVisibleProducts(): any[] {
    const startIndex = this.currentIndex * 3;
    const endIndex = startIndex + 3;
    return this.products.slice(startIndex, endIndex);
  }

  next(): void {
    if (this.currentIndex < Math.ceil(this.products.length / 3) - 1) {
      this.currentIndex++;
      this.transitioning = true;
      setTimeout(() => {
        this.transitioning = false;
      }, 100);
    }
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.transitioning = true;
      setTimeout(() => {
        this.transitioning = false;
      }, 100);
    }
  }

  onEdit(item: any): void {
    this.changeData.emit(item);
  }

  onDelete(item: any): void {
    console.log(item);
    this.productService.deleteProduct(item);
  }

  onBuy(item: any): void {
    if (this.customerService.getLoggedUser() == null) {
      alert('Utilizatorul nu este logat, trebuie sa te loghezi inainte sa adaugi produse in cos');
      this.router.navigate(['/', 'auth']);
    } else {
      this.router.navigate(['/', 'product-details', item.id]);
    }
  }

  protected readonly appConfig = appConfig;


}

