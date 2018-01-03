import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.css']
})
export class RatingStarComponent {
  @Input() max: number;
  @Output() onRating = new EventEmitter<Number>();

  maxItem : any[];
  ratedCount : number;
  
  constructor(){
      this.ratedCount = 0;
  }
  
  ngOnInit(){
      this.maxItem = [];
      for(var i=0;i<this.max;i++){
          this.maxItem.push(i+1);
      }
  }
  toggleRating(s:number){
       this.ratedCount = s;
       this.onRating.emit(this.ratedCount);
       console.log(this.ratedCount);
  }

}
