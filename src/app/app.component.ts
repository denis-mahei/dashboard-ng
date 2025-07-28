import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [UserComponent],
  template: ` <app-user />`,
})
export class AppComponent {}
