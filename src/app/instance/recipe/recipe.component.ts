import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'

@Component({
    selector: 'app-recipe',
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {


    constructor(private route:ActivatedRoute) {
    }

    ngOnInit() {

        this.route.params.forEach((r) => {
            console.log(r['name']);
        })
    }

}
