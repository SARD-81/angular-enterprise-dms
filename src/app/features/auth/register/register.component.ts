import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../../../lib/components/ui/button.component';
import { InputComponent } from '../../../../lib/components/ui/input.component';
import { CardComponent, CardHeaderComponent, CardTitleComponent, CardDescriptionComponent, CardContentComponent } from '../../../../lib/components/ui/card.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    InputComponent,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardContentComponent
  ],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <ui-card>
          <ui-card-header class="text-center">
            <ui-card-title>Create Account</ui-card-title>
            <ui-card-description>Join Enterprise DMS</ui-card-description>
          </ui-card-header>
          <ui-card-content>
            <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <ui-input
                  label="First Name"
                  placeholder="John"
                  formControlName="firstName"
                  [error]="getFieldError('firstName')"
                  [required]="true"
                ></ui-input>
                
                <ui-input
                  label="Last Name"
                  placeholder="Doe"
                  formControlName="lastName"
                  [error]="getFieldError('lastName')"
                  [required]="true"
                ></ui-input>
              </div>
              
              <ui-input
                label="Email"
                type="email"
                placeholder="john@company.com"
                formControlName="email"
                [error]="getFieldError('email')"
                [required]="true"
              ></ui-input>
              
              <ui-input
                label="Password"
                type="password"
                placeholder="Create a password"
                formControlName="password"
                [error]="getFieldError('password')"
                [required]="true"
              ></ui-input>
              
              <ui-input
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
                formControlName="confirmPassword"
                [error]="getFieldError('confirmPassword')"
                [required]="true"
              ></ui-input>
              
              <ui-button
                type="submit"
                [disabled]="registerForm.invalid"
                [loading]="isLoading"
                class="w-full"
              >
                Create Account
              </ui-button>
            </form>
            
            <div class="mt-6 text-center">
              <p class="text-sm text-gray-600">
                Already have an account?
                <a routerLink="/auth/login" class="font-medium text-primary hover:text-primary/80">
                  Sign in
                </a>
              </p>
            </div>
          </ui-card-content>
        </ui-card>
      </div>
    </div>
  `
})
export class RegisterComponent {
  registerForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    
    return null;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.isLoading = true;
      setTimeout(() => {
        this.router.navigate(['/auth/login']);
        this.isLoading = false;
      }, 1000);
    }
  }

  getFieldError(fieldName: string): string {
    const field = this.registerForm.get(fieldName);
    if (field?.errors && (field.touched || field.dirty)) {
      if (field.errors['required']) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['minlength']) {
        return `Password must be at least ${field.errors['minlength'].requiredLength} characters`;
      }
      if (field.errors['passwordMismatch']) {
        return 'Passwords do not match';
      }
    }
    return '';
  }
}
