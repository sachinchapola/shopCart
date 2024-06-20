import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./component/header/header.component";
import { ItemsComponent } from "./component/electronic-items/items.component";
import { SingleItemComponent } from "./component/single-item/single-item.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, ItemsComponent, SingleItemComponent]
})
export class AppComponent {
  title = 'shopCart';
}
