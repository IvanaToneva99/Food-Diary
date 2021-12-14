import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  isInvalid: boolean = false;
  usernameMessage: string = 'The username must contain at least 6 characters lowercase or uppercase with at least one special character like\n' + '@$!%*.#?&) and number/s.';
  passwordMessage: string = 'The password must contain at least 8 characters lowercase or uppercase with at least one special character like\n' + '@$!%*.#?&) and number/s.';
  /*
     The first {} is for characters to be between 6 and 20, then not contain any .- or _ in the begging
     Not contain any . - _ in the middle of the username
     Then contain some characters -lowercase or uppercase and some numbers
     Not finish with . - _
  */
  userNamePattern: RegExp = /^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
  /*
     To begin with lowercase or uppercase characters then contains some special symbol such as $@. and other
     Then some characters and special symbols and the all length of the password must be at least 8 characters
   */
  passwordPattern: RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*.#?&])[A-Za-z\d$@$!%*.#?&]{8,}$/;

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  loginButton(): void {
    this.isInvalid = !this.userNamePattern.test(this.username) || !this.passwordPattern.test(this.password);
    if (!this.isInvalid) {
      localStorage.setItem('username', this.username);
      this.router.navigate(['/']);
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  onUsernameBlur(event: any): void {
    this.username = event.target.value;
  }

  onPasswordBlur(event: any): void {
    this.password = event.target.value;
  }
}
