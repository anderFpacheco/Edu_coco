import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
<<<<<<< HEAD
    { title: 'ho', url: '/folder/ho', icon: 'warning' },
=======
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
    { title: 'Image', url: '/folder/spam', icon: 'image' },
    
>>>>>>> 50f130e2708e76fef9563676faceded692abd3a3
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
