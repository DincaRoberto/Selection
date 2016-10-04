import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

    recipes;

    constructor(private _router:Router) {
    }

    ngOnInit() {
        this.recipes = [
            {"name": "Recipe 1"},
            {"name": "Recipe 2"},
            {"name": "Recipe 3"},
            {"name": "Recipe 4"},
            {"name": "Recipe 5"},
            {"name": "Recipe 6"}
        ]
    }

    deleteRecipes(r) {
        this.recipes.splice(this.recipes.indexOf(r), 1);
    }

    onShow(name){
        this._router.navigate(['/recipe',name]);
    }

}
