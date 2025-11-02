import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingService } from './core/services/loading.service';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div [class]="themeService.isDark() ? 'dark' : ''" class="min-h-screen bg-background">
      <!-- Global Loading Overlay -->
      @if (loadingService.isLoading()) {
        <div class="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div class="flex items-center space-x-2 text-primary">
            <div class="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            <span class="text-sm font-medium">Loading...</span>
          </div>
        </div>
      }
      
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  constructor(
    public loadingService: LoadingService,
    public themeService: ThemeService
  ) {}
}