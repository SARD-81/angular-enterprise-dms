import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '../../utils';

@Component({
  selector: 'ui-avatar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)">
      @if (src && !imageError) {
        <img
          [src]="src"
          [alt]="alt"
          class="aspect-square h-full w-full object-cover"
          (error)="onImageError()"
        />
      } @else {
        <div class="flex h-full w-full items-center justify-center rounded-full bg-muted">
          @if (fallback) {
            <span class="text-sm font-medium text-muted-foreground">{{ fallback }}</span>
          } @else {
            <svg class="h-6 w-6 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          }
        </div>
      }
    </div>
  `,
})
export class AvatarComponent {
  @Input() src = '';
  @Input() alt = '';
  @Input() fallback = '';
  @Input() className = '';
  
  imageError = false;
  protected cn = cn;

  onImageError(): void {
    this.imageError = true;
  }

  static getInitials(name: string): string {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }
}