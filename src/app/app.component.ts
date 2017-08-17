import { Component } from '@angular/core';
import Music from '../model/music';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    lists = [];
    music : Music = new Music();

    retrieve(){

    }

    save(){

    }

}
