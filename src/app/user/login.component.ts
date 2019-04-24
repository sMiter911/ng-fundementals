import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em { float:right; color:#E05C65; padding-left:10px}
    `]
})
export class LoginComponent implements OnInit {
    userName;
    password;
    mouseoverLogin;
    constructor(private _authSerivice: AuthService, private _router: Router) { }

    ngOnInit(): void { }

    login(formValues) {
        this._authSerivice.loginUser(formValues.userName, formValues.password)
        this._router.navigate(['events'])
        //console.log(formValues)
    }

    cancel () {
        this._router.navigate(['events'])
    }

}
