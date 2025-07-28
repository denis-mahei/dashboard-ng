import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: ` <p>The user's name is {{ occupation() }}</p> `,
})
export class UserComponent {
  occupation = input<string>();
}
