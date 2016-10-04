import {Injectable} from '@angular/core';
import {RESTAURANTS} from "./mock-restaurants";

@Injectable()
export class RestaurantsService {

    constructor() {
        console.log(" --- RestaurantsService ---")
    }

    getRestaurants(){
        return Promise.resolve(RESTAURANTS);
    }

}
