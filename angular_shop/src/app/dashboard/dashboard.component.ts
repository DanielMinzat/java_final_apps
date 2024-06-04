import {Component, OnInit} from '@angular/core';
import {AddEditProductComponent} from "./add-edit-product/add-edit-product.component";
import {ListProductsComponent} from "../list-products/list-products.component";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {Router} from "@angular/router";
import {AddEditCustomerComponent} from "./add-edit-customer/add-edit-customer.component";
import {ListCustomersComponent} from "./list-customers/list-customers.component";
import {ListOrdersComponent} from "./list-orders/list-orders.component";
import {ConfigurationsService} from "../services/configurations.service";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AddEditProductComponent,
    ListProductsComponent,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    AddEditCustomerComponent,
    ListCustomersComponent,
    ListOrdersComponent,
    TitleCasePipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
// adaugat de mine on init
export class DashboardComponent implements OnInit{
  productData: any;
  customerData: any;

  constructor(public appConfig: ConfigurationsService,  private router: Router) {

  }

  onManger(type: string): void {
    switch (type) {
      case 'customers':
        this.router.navigate(['/', 'dashboard', 'customers-manager']);
        break;
      case 'products':
        this.router.navigate(['/', 'dashboard', 'products-manager']);
        break;
      case 'orders':
        this.router.navigate(['/', 'dashboard', 'orders-manager']);
        break;
    }
  }

  onHome() {
    this.router.navigate(['/', 'home']);
  }

  onLogOut() {
    this.router.navigate(['/', 'auth']);
  }

  // adaugat de mine
  ngOnInit(): void {
    const horizontalViews = document.querySelectorAll('.horizontal-view');
    horizontalViews.forEach(function(view) {
      view.addEventListener('scroll', function() {
        if (view.scrollLeft !== 0) {
          view.scrollLeft = 0;
        }
      });
    });
  }

}
