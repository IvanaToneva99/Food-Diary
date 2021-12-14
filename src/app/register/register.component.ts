import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username: string = '';
  password: string = '';
  email: string = '';
  firstName: string = '';
  lastName: string = '';
  age: string = '';
  isFormInvalid: boolean = false;
  usernameMessage: string = 'The username must contain at least 6 characters lowercase or uppercase with at least one special character like\n' + '@$!%*.#?&) and number/s.';
  passwordMessage: string = 'The password must contain at least 8 characters lowercase or uppercase with at least one special character like\n' + '@$!%*.#?&) and number/s.';
  firstnameMessage: string = 'The firstname must contain at least two symbols lowercase or uppercase.';
  lastnameMessage: string = 'The lastname must contain at least two symbols lowercase or uppercase.';
  emailMessage: string = 'The email isn\'t write properly! Example: test123-@test.com';
  ageMessage: string = 'The age must be greater than 0 and lower than 101.';
  /*
     The first {} is for characters to be between 6 and 20, then not contain any .- or _ in the begging
     Not contain any . - _ in the middle of the username
     Then contain some characters -lowercase or uppercase and some numbers
     Not finish with . - _
   */
  userNamePattern: RegExp = /^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
  passwordPattern: RegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*.#?&])[A-Za-z\d$@$!%*.#?&]{8,}$/;
  firstNamePattern: RegExp = /^[A-Za-z]{2,20}$/;
  lastNamePattern: RegExp = /^[A-Za-z]{2,20}$/;
  emailPattern: RegExp = /^[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[a-z]{2,3}$/;
  agePattern: RegExp = /^[1-9][0-9]?$/;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  registerButton(): void {
    this.isFormInvalid = this.validateForm();
    if (!this.isFormInvalid) {
      this.router.navigate(['/login']);
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  validateForm(): boolean {
    return !this.userNamePattern.test(this.username) || !this.passwordPattern.test(this.password) ||
      !this.firstNamePattern.test(this.firstName) || !this.lastNamePattern.test(this.lastName) ||
      !this.emailPattern.test(this.email) || !this.agePattern.test(this.age);
  }

  onUsernameBlur(event: any): void {
    this.username = event.target.value;
  }

  onPasswordBlur(event: any): void {
    this.password = event.target.value;
  }

  onFirstnameBlur(event: any): void {
    this.firstName = event.target.value;
  }

  onLastnameBlur(event: any): void {
    this.lastName = event.target.value;
  }

  onEmailBlur(event: any): void {
    this.email = event.target.value;
  }

  onAgeBlur(event: any ): void{
    this.age = event.target.value;
  }
}
