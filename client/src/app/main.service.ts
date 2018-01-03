import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';

@Injectable()
export class MainService {
  rate;

  constructor(private _http: Http) { }

  showRating(data, callback) {
    this._http.post('/rate', {data:data}).subscribe(
      (res) => {
        console.log(data);
        callback(res.json());
      },
      (err) => { console.log(err); }
    )
  }

}
