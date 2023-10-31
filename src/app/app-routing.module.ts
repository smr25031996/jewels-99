import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { SignInComponent } from './sign-in/sign-in.component';
import SignUpComponent from './sign-up/sign-up.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'home',
    component: HomepageComponent,
    title: "homepage"

  },
  {
    path: 'about',
    component: AboutComponent,
    title: "about"

  },
  {
    path: 'myOrders',
    component: MyOrdersComponent,
    title: "myorders"

  }, {
    path: 'cart',
    component: CartComponent,
    title: "homepage"

  }, {
    path: 'favorites',
    component: FavouritesComponent,
    title: "favorites"

  }, {
    path: 'login',
    component: SignInComponent,
    title: "login"

  }, {
    path: 'register',
    component: SignUpComponent,
    title: "register"

  },
  {
    path: 'detail/:name',
    component: ProductDetailComponent,
    title: 'productdetails'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
