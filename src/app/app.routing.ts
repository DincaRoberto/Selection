/**
 * Created by r.dinca on 02/10/16.
 */

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RestaurantsComponent} from "./restaurants/restaurants.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RecipeComponent} from "./instance/recipe/recipe.component";

const appRoutes: Routes = [
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'recipes', component: RecipesComponent },
    { path: 'recipe/:name', component: RecipeComponent },
    { path: '', component: DashboardComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);