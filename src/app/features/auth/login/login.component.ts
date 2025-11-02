import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { NotificationService } from '../../../core/services/notification.service';
import { ButtonComponent } from '../../../../lib/components/ui/button.component';
import { InputComponent } from '../../../../lib/components/ui/input.component';
import { CardComponent, CardHeaderComponent, CardTitleComponent, CardDescriptionComponent, CardContentComponent } from '../../../../lib/components/ui/card.component';

@Component({
  selector: 'app-login',
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
            <ui-card-title>Enterprise DMS</ui-card-title>
            <ui-card-description>Sign in to your account</ui-card-description>
          </ui-card-header>
          <ui-card-content>
            <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-4">
              <ui-input
                label="Email"
                type="email"
                placeholder="Enter your email"
                formControlName="email"
                [error]="getFieldError('email')"
                required
              ></ui-input>
              
              <ui-input
                label="Password"
                type="password"
                placeholder="Enter your password"
                formControlName="password"
                [error]="getFieldError('password')"
                required
              ></ui-input>
              
              <ui-button
                type="submit"
                [disabled]="loginForm.invalid"
                [loading]="isLoading"
                class="w-full"
              >
                Sign In
              </ui-button>
            </form>
            
            <div class="mt-6 text-center">
              <p class="text-sm text-gray-600">
                Don't have an account?
                <a routerLink="/auth/register" class="font-medium text-primary hover:text-primary/80">
                  Sign up
                </a>
              </p>
            </div>
          </ui-card-content>
        </ui-card>
      </div>
    </div>
  `
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      const credentials = this.loginForm.value;
      
      // Mock login for demo purposes
      setTimeout(() => {
        const mockResponse = {
          token: 'mock-jwt-token',
          refreshToken: 'mock-refresh-token',
          user: {
            id: '1',
            email: credentials.email,
            firstName: 'John',
            lastName: 'Doe',
            fullName: 'John Doe',
            roles: ['admin'],
            permissions: ['read', 'write', 'delete'],
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        };
        
        // Simulate API call
        this.authService['setSession'](mockResponse);
        this.notificationService.success('Login successful', 'Welcome back!');
        this.router.navigate(['/dashboard']);
        this.isLoading = false;
      }, 1000);
    }
  }

  getFieldError(fieldName: string): string {
    const field = this.loginForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['minlength']) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least ${field.errors['minlength'].requiredLength} characters`;
      }
    }
    return '';
  }
}