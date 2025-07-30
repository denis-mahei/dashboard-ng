import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  template: ` <h4>Hello, {{ username }}!</h4>`,
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input() username: string = '';
}
