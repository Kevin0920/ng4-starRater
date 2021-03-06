import { Component, OnInit } from '@angular/core';
import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
import { MainService } from "./../main.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: SocialUser;
  
  private loggedIn: boolean;

  constructor(private authService: AuthService, private _router: Router) {
    if (localStorage.user !== undefined) {
      this.user = JSON.parse(localStorage.user);
    }
   }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this._router.navigate(['']);
  }

  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
      this.loggedIn = (user != null);
    });
  }
}
