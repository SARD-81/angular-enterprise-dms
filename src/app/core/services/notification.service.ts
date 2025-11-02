import { Injectable, signal } from '@angular/core';

export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  persistent?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications = signal<Notification[]>([]);
  public notifications$ = this.notifications.asReadonly();

  success(title: string, message?: string, duration = 5000): void {
    this.addNotification({ type: 'success', title, message, duration });
  }

  error(title: string, message?: string, persistent = false): void {
    this.addNotification({ 
      type: 'error', 
      title, 
      message, 
      persistent,
      duration: persistent ? undefined : 8000 
    });
  }

  warning(title: string, message?: string, duration = 6000): void {
    this.addNotification({ type: 'warning', title, message, duration });
  }

  info(title: string, message?: string, duration = 4000): void {
    this.addNotification({ type: 'info', title, message, duration });
  }

  remove(id: string): void {
    this.notifications.update(notifications => 
      notifications.filter(n => n.id !== id)
    );
  }

  clear(): void {
    this.notifications.set([]);
  }

  private addNotification(notification: Omit<Notification, 'id'>): void {
    const id = this.generateId();
    const newNotification: Notification = { ...notification, id };
    
    this.notifications.update(notifications => [...notifications, newNotification]);
    
    // Auto remove if not persistent
    if (!notification.persistent && notification.duration) {
      setTimeout(() => {
        this.remove(id);
      }, notification.duration);
    }
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
}