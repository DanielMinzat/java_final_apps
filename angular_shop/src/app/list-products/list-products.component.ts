// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { ProductService } from '../services/product.service';
// import { MatCardModule } from '@angular/material/card';
// import {NgClass, NgForOf, NgIf, TitleCasePipe} from '@angular/common';
// import { MatButtonModule } from '@angular/material/button';
// import { OrderService } from '../services/order.service';
// import { CustomerService } from '../services/customer.service';
// import { Router } from '@angular/router';
//
// @Component({
//   selector: 'app-list-products',
//   standalone: true,
//   imports: [
//     MatCardModule,
//     NgForOf,
//     MatButtonModule,
//     NgIf,
//     TitleCasePipe,
//     NgClass
//   ],
//   templateUrl: './list-products.component.html',
//   styleUrls: ['./list-products.component.css']
// })
// export class ListProductsComponent {
//   @Output() changeData = new EventEmitter<any>();
//   @Input('isAdmin') isAdmin: boolean = false;
//   products: Array<any> = [];
//   currentIndex: number = 0;
//   itemsPerPage: number = 3;
//
//   constructor(
//     private productService: ProductService,
//     private orderService: OrderService,
//     private customerService: CustomerService,
//     private router: Router
//   ) {
//     this.productService.getProductList().subscribe((productList: Array<any>) => {
//       this.products = productList;
//     });
//   }
//
//   getVisibleProducts() {
//     const startIndex = this.currentIndex * 3; // Afișăm câte 3 carduri pe fiecare pagină
//     const endIndex = startIndex + 3;
//     return this.products.slice(startIndex, endIndex);
//   }
//
//   getTransform() {
//     const percentage = (this.currentIndex * -100) / this.itemsPerPage;
//     return `translateX(${percentage}%)`;
//   }
//
//   transitioning: boolean = false;
//   prev() {
//     if (this.currentIndex > 0) { // Verificăm dacă mai sunt pagini anterioare
//       this.currentIndex--;
//       this.transitioning = true;
//       setTimeout(() => {
//         this.transitioning = false;
//       }, 750); // Așteptăm 750ms pentru ca tranzitia să se termine
//     }
//   }
//
//   next() {
//       if (this.currentIndex < Math.ceil(this.products.length / 3) - 1) { // Verificăm dacă mai sunt pagini următoare
//         this.currentIndex++;
//         this.transitioning = true;
//         setTimeout(() => {
//           this.transitioning = false;
//         }, 750); // Așteptăm 750ms pentru ca tranzitia să se termine
//       }
//     }
//
//   onEdit(item: any) {
//     this.changeData.emit(item);
//   }
//
//   onDelete(item: any) {
//     console.log(item);
//     this.productService.deleteProduct(item);
//   }
//
//   onBuy(item: any) {
//     if (this.customerService.getLoggedUser() == null) {
//       alert('Utilizatorul nu este logat, trebuie sa te loghezi inainte sa adaugi produse in cos');
//       this.router.navigate(['/', 'auth']);
//     } else {
//       this.router.navigate(['/', 'product-details', item.id]);
//     }
//   }
//
//
// }

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
import {MatCard, MatCardContent} from "@angular/material/card";
import {NgClass, NgForOf, NgIf, TitleCasePipe} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {OrderService} from "../services/order.service";
import {CustomerService} from "../services/customer.service";
import {Router} from "@angular/router";

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
    NgClass
  ],
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  @Input() isAdmin: boolean = false;
  @Output() changeData = new EventEmitter<any>();

  products: any[] = []; // Schimbați acest tip la nevoie
  currentIndex: number = 0;
  transitioning: boolean = false;
  isSlidingLeft = false;
  isSlidingRight = false;

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


  //
  // slideLeft() {
  //   if (this.currentIndex > 0) {
  //     this.currentIndex--;
  //   }
  //   this.isSlidingLeft = true;
  //   setTimeout(() => {
  //     this.isSlidingLeft = false;
  //   }, 500); // Durata animației în milisecunde
  // }
  //
  // slideRight() {
  //   if (this.currentIndex < Math.ceil(this.products.length / 3) - 1) {
  //     this.currentIndex++;
  //   }
  //   this.isSlidingRight = true;
  //   setTimeout(() => {
  //     this.isSlidingRight = false;
  //   }, 500); // Durata animației în milisecunde
  // }


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
  }

