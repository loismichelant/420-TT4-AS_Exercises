import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  program = '';
  errorMessage = '';

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ){}

  submit(){
    this.auth.signup(this.name, this.email, this.password, this.program).subscribe({
      next: (res)=>{
        console.log(res);
        this.router.navigate(['/materials'])
      },
      error: (err)=>{
        console.log(err);
        this.errorMessage =  "Signup failed"
      }
    });
  }

}
