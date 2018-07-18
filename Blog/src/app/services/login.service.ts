import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  login(loginForm: FormGroup) : Observable<any> {
    return this.httpClient.get<any>("http://localhost:3000/users?username="+ loginForm.value['username']);
  }
}
