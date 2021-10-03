import { Route } from '@angular/compiler/src/core';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public loggedUser = "";
  makeItVisible = false;
    constructor( private router : Router) { }

    ngOnInit(): void {
    }
  showUsername(username:any){
    this.router.navigate(['/Dashboard',username])
    this.loggedUser = username;
 
  }
  onClick(event:any){
    event.preventDefault();
    console.log(event);
    this.makeItVisible = true;

  }
  }
  
