import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from "./restaurants.service";
import {Restaurant} from "./restaurant";

@Component({
    selector: 'app-restaurants',
    templateUrl: './restaurants.component.html',
    styleUrls: ['./restaurants.component.css'],
    providers: [RestaurantsService]
})
export class RestaurantsComponent implements OnInit {

    public restaurants:Restaurant[];
    public showRecipes:boolean[];

    constructor(private _restaurantService: RestaurantsService) {
        this.showRecipes = [];
    }

    ngOnInit() {
        this._restaurantService.getRestaurants().then((restaurants:Restaurant[]) => {
                this.restaurants = restaurants;

                 console.log(this.showRecipes);

                for (let r of this.restaurants) {
                    this.showRecipes.push(false);
                }
            }

        )
    }

    deleteRestaurant(r){
        this.restaurants.splice(this.restaurants.indexOf(r), 1);
    }

}
