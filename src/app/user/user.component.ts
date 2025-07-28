import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <div [contentEditable]="isEditable"></div>

    <button (click)="toggleEdit()">{{ isEditable ? 'Block' : 'Edit' }}</button>
  `,
  styleUrl: 'user.component.scss',
})
export class UserComponent {
  isEditable = false;

  toggleEdit() {
    this.isEditable = !this.isEditable;
  }
}
