import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
  login(value) {
    console.log('touched --> ' + this.loginForm.touched);
    console.log('valid --> ' + this.loginForm.valid);
    console.log(value);
    if(this.loginForm.touched && this.loginForm.valid) {
      this.loginService.login(this.loginForm).subscribe(
        data => { 
          if(data.length) {
            if(data[0].password == this.loginForm.value.password){
              console.log('successful login');
              localStorage.setItem('userid', data[0].id);
              this.router.navigate(['/dashboard']);
            }
            else{
              console.log('invalid username or password');
            }
          }
          else {
            
            console.log('invalid username or password');
          }
        
      },
        error => {console.log(error);}
      )
    }
  }

}
