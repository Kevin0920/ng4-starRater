import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  constructor(){
    this.title = 'Rating stars using Angular';
  }
  onRating(rating : number){
    console.log(rating);
  }
}
