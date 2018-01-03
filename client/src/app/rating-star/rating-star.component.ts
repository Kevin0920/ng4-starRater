import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MainService } from "./../main.service";

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.css']
})
export class RatingStarComponent {
  @Input() max: number;
  @Output() onRating = new EventEmitter<Number>();

  maxItem: any[];
  ratedCount: number;

  constructor(private _service: MainService) {
    this.ratedCount = 0;
  }

  ngOnInit() {
    this.maxItem = [];
    for (var i = 0; i < this.max; i++) {
      this.maxItem.push(i + 1);
    }
  }
  toggleRating(s: number) {
    this.ratedCount = s;
    this._service.showRating(this.ratedCount, (res) => {
    })
  }

}
