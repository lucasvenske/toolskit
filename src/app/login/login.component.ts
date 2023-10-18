import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public form: FormGroup;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      username: ['', Validators.compose([Validators.minLength(1), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(8), Validators.required])]
    })
  }

  submit() {
    this.authService.authenticate(this.form.value)
      .subscribe(
        (data: any) => {
          console.log(data)
          localStorage.setItem('token', data.token)
        },
        (err) => {
          console.log(err)
        }
      )
  }
}
