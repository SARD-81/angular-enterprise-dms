import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'dms_theme';
  
  public isDark = signal<boolean>(this.getInitialTheme());

  constructor() {
    // Effect to update DOM when theme changes
    effect(() => {
      this.updateDOMTheme(this.isDark());
    });
  }

  toggleTheme(): void {
    this.isDark.update(current => !current);
    localStorage.setItem(this.THEME_KEY, this.isDark().toString());
  }

  setTheme(isDark: boolean): void {
    this.isDark.set(isDark);
    localStorage.setItem(this.THEME_KEY, isDark.toString());
  }

  private getInitialTheme(): boolean {
    const saved = localStorage.getItem(this.THEME_KEY);
    if (saved !== null) {
      return saved === 'true';
    }
    
    // Default to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private updateDOMTheme(isDark: boolean): void {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}