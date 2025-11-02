import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../../../lib/components/ui/button.component';
import { CardComponent, CardHeaderComponent, CardTitleComponent, CardDescriptionComponent, CardContentComponent } from '../../../../lib/components/ui/card.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ButtonComponent,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardContentComponent
  ],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-background p-4">
      <ui-card class="w-full max-w-md">
        <ui-card-header class="text-center">
          <div class="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
            <svg class="w-8 h-8 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1H5C3.89,1 3,1.89 3,3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V9M19,19H5V3H13V9H19V19Z" />
            </svg>
          </div>
          <ui-card-title class="text-2xl">404 - Page Not Found</ui-card-title>
          <ui-card-description>
            The page you're looking for doesn't exist or has been moved.
          </ui-card-description>
        </ui-card-header>
        <ui-card-content class="text-center space-y-4">
          <ui-button routerLink="/dashboard" class="w-full">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
            </svg>
            Back to Dashboard
          </ui-button>
          <ui-button routerLink="/documents" variant="outline" class="w-full">
            Browse Documents
          </ui-button>
        </ui-card-content>
      </ui-card>
    </div>
  `
})
export class NotFoundComponent {}
