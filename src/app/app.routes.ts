import { Routes } from '@angular/router';
import { ItemsComponent } from './component/electronic-items/items.component';
import { SingleItemComponent } from './component/single-item/single-item.component';
import { AddToCartComponent } from './component/add-to-cart/add-to-cart.component';
import { LaptopComponent } from './component/laptop/laptop.component';
import { HeadphonesComponent } from './component/headphones/headphones.component';
import { PhonesComponent } from './component/phones/phones.component';
import { WatchComponent } from './component/watch/watch.component';

export const routes: Routes = [
  { path: '', redirectTo: 'electronics-items', pathMatch: 'full' },
  { path: 'electronics-items', component: ItemsComponent },
  { path: 'single-item', component: SingleItemComponent },
  { path: 'cart', component: AddToCartComponent},

  { path: 'laptop', component: LaptopComponent},
  { path: 'headphones', component: HeadphonesComponent},
  { path: 'mobile', component: PhonesComponent},
  { path: 'watch', component: WatchComponent}
];
