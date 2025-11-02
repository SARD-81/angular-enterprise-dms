import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { ThemeService } from '../../core/services/theme.service';
import { ButtonComponent } from '../../../lib/components/ui/button.component';
import { AvatarComponent } from '../../../lib/components/ui/avatar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ButtonComponent,
    AvatarComponent
  ],
  template: `
    <div class="min-h-screen bg-background">
      <!-- Sidebar -->
      <div class="fixed inset-y-0 left-0 z-50 w-64 bg-card border-r">
        <!-- Logo -->
        <div class="flex h-16 items-center px-6 border-b">
          <h1 class="text-xl font-bold text-primary">Enterprise DMS</h1>
        </div>
        
        <!-- Navigation -->
        <nav class="flex-1 px-4 py-6">
          <ul class="space-y-2">
            <li>
              <a
                routerLink="/dashboard"
                routerLinkActive="bg-primary/10 text-primary"
                class="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-accent transition-colors"
              >
                <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,13H11V3H3M3,21H11V15H3M13,21H21V11H13M13,3V9H21V3" />
                </svg>
                Dashboard
              </a>
            </li>
            <li>
              <a
                routerLink="/documents"
                routerLinkActive="bg-primary/10 text-primary"
                class="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-accent transition-colors"
              >
                <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
                Documents
              </a>
            </li>
            <li>
              <a
                routerLink="/workflows"
                routerLinkActive="bg-primary/10 text-primary"
                class="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-accent transition-colors"
              >
                <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7.27C13.6,7.61 14,8.26 14,9A2,2 0 0,1 12,11A2,2 0 0,1 10,9C10,8.26 10.4,7.61 11,7.27V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M12,15A2,2 0 0,1 14,17C14,17.74 13.6,18.39 13,18.73V20.27C13.6,20.61 14,21.26 14,22A2,2 0 0,1 12,24A2,2 0 0,1 10,22C10,21.26 10.4,20.61 11,20.27V18.73C10.4,18.39 10,17.74 10,17A2,2 0 0,1 12,15M7,12A2,2 0 0,1 9,14C9,14.74 8.6,15.39 8,15.73V16.27C8.6,16.61 9,17.26 9,18A2,2 0 0,1 7,20A2,2 0 0,1 5,18C5,17.26 5.4,16.61 6,16.27V15.73C5.4,15.39 5,14.74 5,14A2,2 0 0,1 7,12M17,12A2,2 0 0,1 19,14C19,14.74 18.6,15.39 18,15.73V16.27C18.6,16.61 19,17.26 19,18A2,2 0 0,1 17,20A2,2 0 0,1 15,18C15,17.26 15.4,16.61 16,16.27V15.73C15.4,15.39 15,14.74 15,14A2,2 0 0,1 17,12Z" />
                </svg>
                Workflows
              </a>
            </li>
            <li>
              <a
                routerLink="/users"
                routerLinkActive="bg-primary/10 text-primary"
                class="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-accent transition-colors"
              >
                <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16,4C18.21,4 20,5.79 20,8C20,10.21 18.21,12 16,12C13.79,12 12,10.21 12,8C12,5.79 13.79,4 16,4M16,14C20.42,14 24,15.79 24,18V20H8V18C8,15.79 11.58,14 16,14Z" />
                </svg>
                Users
              </a>
            </li>
            <li>
              <a
                routerLink="/reports"
                routerLinkActive="bg-primary/10 text-primary"
                class="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-accent transition-colors"
              >
                <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z" />
                </svg>
                Reports
              </a>
            </li>
            <li>
              <a
                routerLink="/settings"
                routerLinkActive="bg-primary/10 text-primary"
                class="flex items-center px-3 py-2 text-sm rounded-lg hover:bg-accent transition-colors"
              >
                <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                </svg>
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
      <!-- Main Content -->
      <div class="ml-64">
        <!-- Header -->
        <header class="bg-background border-b h-16 flex items-center justify-between px-6">
          <div class="flex items-center space-x-4">
            <h2 class="text-lg font-semibold">{{ getPageTitle() }}</h2>
          </div>
          
          <div class="flex items-center space-x-4">
            <!-- Theme Toggle -->
            <ui-button
              variant="ghost"
              size="icon"
              (onClick)="toggleTheme()"
              class="text-muted-foreground hover:text-foreground"
            >
              @if (themeService.isDark()) {
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z" />
                </svg>
              } @else {
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.4 6.35,17.41C9.37,20.43 14,20.54 17.33,17.97Z" />
                </svg>
              }
            </ui-button>
            
            <!-- User Menu -->
            <div class="flex items-center space-x-3">
              <ui-avatar
                [src]="currentUser()?.avatar || ''"
                [fallback]="getUserInitials()"
                className="h-8 w-8"
              ></ui-avatar>
              <div class="text-sm">
                <p class="font-medium">{{ currentUser()?.fullName || currentUser()?.firstName + ' ' + currentUser()?.lastName }}</p>
                <p class="text-muted-foreground text-xs">{{ currentUser()?.email }}</p>
              </div>
              <ui-button
                variant="ghost"
                size="sm"
                (onClick)="logout()"
                class="text-muted-foreground hover:text-foreground"
              >
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" />
                </svg>
                Logout
              </ui-button>
            </div>
          </div>
        </header>
        
        <!-- Page Content -->
        <main class="min-h-[calc(100vh-4rem)]">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `
})
export class MainLayoutComponent {
  constructor(
    public authService: AuthService,
    public themeService: ThemeService
  ) {}

  currentUser = this.authService.currentUser;

  getPageTitle(): string {
    const url = window.location.pathname;
    if (url.includes('dashboard')) return 'Dashboard';
    if (url.includes('documents')) return 'Documents';
    if (url.includes('workflows')) return 'Workflows';
    if (url.includes('users')) return 'Users';
    if (url.includes('reports')) return 'Reports';
    if (url.includes('settings')) return 'Settings';
    return 'Enterprise DMS';
  }

  getUserInitials(): string {
    const user = this.currentUser();
    if (user) {
      return AvatarComponent.getInitials(user.firstName + ' ' + user.lastName);
    }
    return 'U';
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  logout(): void {
    this.authService.logout();
  }
}