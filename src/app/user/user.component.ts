import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    @if (isLoggedIn) {
      <span>Yes, the server is running!</span>
    } @else {
      <span>Access denied. Server is stoped</span>
    }
  `,
})
export class UserComponent {
  isLoggedIn = false;
}
