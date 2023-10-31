import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SignInComponent } from '../sign-in/sign-in.component';
import SignUpComponent from '../sign-up/sign-up.component';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {


  isMobileView: boolean = false;
  cartCount: number = 0;


  constructor(private breakpointObserver: BreakpointObserver, private cartService: ProductService, public dialog: MatDialog) {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      '(max-width: 719px)'
    ]).subscribe(result => {
      this.isMobileView = result.matches;
    });

  }
  openDialog() {
    this.dialog.open(SignInComponent);
  }
  openDialog2() {
    this.dialog.open(SignUpComponent);
  }
  ngOnInit(): void {
    this.cartService.getCartCount().subscribe((count: number) => {
      this.cartCount = count;
    });

  }

}