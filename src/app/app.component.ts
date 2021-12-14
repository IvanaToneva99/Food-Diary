import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'food-diary';
  constructor(private router: Router) {
  }

  logOut(): void {
    localStorage.setItem('username', '');
    this.router.navigate(['/']);
  }

  isUserLoggedIn(): boolean {
    return !!localStorage.getItem('username');
  }

  getUsername(): string {
    return localStorage.getItem('username') ?? 'World';
  }
}
