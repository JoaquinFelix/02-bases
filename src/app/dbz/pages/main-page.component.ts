
import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    public characters: Character[] = [{
        name: 'Picolo',
        power: 120
    },{
        name: "Veggueta",
        power: 2500
    },{
        name: "Goku",
        power: 3500
    }];
}