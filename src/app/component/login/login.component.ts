import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService, ILoginObj } from './login.service'; // Import ILoginObj from service

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const loginObj: ILoginObj = { email, password }; // Create login object

      this.loginService.login(loginObj).subscribe({
        next: (response: any) => {
          localStorage.setItem('user', JSON.stringify(response.user));
          localStorage.setItem('role', response.role);
          localStorage.setItem('token', response.token);
          localStorage.setItem('expiration', response.expiration);

          console.log('Login successful');
          this.router.navigate(['/dashboard']);
        },
        error: (error: any) => {
          console.error('Login failed', error);
          this.errorMessage = 'Invalid email or password. Please try again.'; // Display error message to user
        }
      });
    }
  }
}
