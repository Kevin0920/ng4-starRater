import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import { FacebookLoginProvider } from "angular4-social-login";

@Injectable()
export class MainService {
  rate;
  user
  constructor(private _http: Http) {
    if (localStorage.user !== undefined) {
      this.user = JSON.parse(localStorage.user);
      console.log(this.user);
    }
   }

  showRating(data, callback) {
    this._http.post('/rate', {data:data}).subscribe(
      (res) => {
        console.log(data);
        callback(res.json());
      },
      (err) => { console.log(err); }
    )
  }

  singOut() {
    localStorage.removeItem("user");
    console.log(localStorage.user);
    this.user = null;
  }

}
