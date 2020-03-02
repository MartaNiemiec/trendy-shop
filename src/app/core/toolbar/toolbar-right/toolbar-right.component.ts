import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/products/productsService.service';

@Component({
  selector: "app-toolbar-right",
  templateUrl: "./toolbar-right.component.html",
  styleUrls: ["./toolbar-right.component.scss"]
})
export class ToolbarRightComponent implements OnInit, OnDestroy {
  isAuth = false;
  authSubscription: Subscription;

  constructor(private authService: AuthService,public productsService: ProductsService) {}

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
    this.productsService.getNumberOfProducts()
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
