import {Component} from '@angular/core';
import {RestaurantsService} from "./restaurants/restaurants.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [RestaurantsService]
})
export class AppComponent {
    title = 'Selection';
}
