import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { NotificationService, Notification, NotificationType } from '../../../application/notification.service'; 

@Component({
  selector: 'app-notification',  
  templateUrl: './notification.html',
  styleUrls: ['./notification.css']
})
export class NotificationComponent implements OnInit, OnDestroy {
  notifications: Notification[] = [];  
  private subscription: Subscription = new Subscription();

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.notificationService.notifications$.subscribe((notification: Notification) => {
        this.notifications = [...this.notifications, notification];  
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();  
  }


  dismissNotification(id: string): void {
    this.notifications = this.notifications.filter(n => n.id !== id);
    this.notificationService.dismiss(id);  
  }


  autoDismiss(notification: Notification): void {
    setTimeout(() => {
      this.dismissNotification(notification.id);
    }, notification.duration || 5000);
  }

  getNotificationClass(type: NotificationType): string {
    switch (type) {
      case NotificationType.SUCCESS: return 'success';
      case NotificationType.ERROR: return 'error';
      case NotificationType.INFO: return 'info';
      case NotificationType.WARNING: return 'warning';
      default: return 'info';
    }
  }
}
