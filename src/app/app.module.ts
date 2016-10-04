import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {MdListModule} from '@angular/material/list';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {RecipesComponent} from './recipes/recipes.component';
import {routing, appRoutingProviders} from "./app.routing";
import { RecipeComponent } from './instance/recipe/recipe.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        RestaurantsComponent,
        RecipesComponent,
        RecipeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule.forRoot(),
        MdListModule.forRoot(),
        routing
    ],

    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})
export class AppModule {
}
