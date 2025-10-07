import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum NotificationType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning'
}

export interface Notification {
  id: string;  
  message: string;
  type: NotificationType;
  duration?: number;  
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new Subject<Notification>();
  public notifications$ = this.notificationSubject.asObservable();

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  show(message: string, type: NotificationType = NotificationType.INFO, duration: number = 5000): void {
    const id = this.generateId();
    const notification: Notification = { id, message, type, duration };

    this.notificationSubject.next(notification);

    if (duration > 0) {
      setTimeout(() => {
        this.dismiss(id);
      }, duration);
    }
  }

  dismiss(id: string): void {
    console.log(`Notificación ${id} dismissida`);  
  }
  clearAll(): void {
    console.log('Todas las notificaciones clear');
  }
}
