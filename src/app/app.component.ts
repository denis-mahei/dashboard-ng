import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrl: 'app.component.scss',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav>
      <a
        class="linkRoute"
        routerLink="/"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }"
        >Home</a
      >
      |
      <a class="linkRoute" routerLink="/task-1" routerLinkActive="active"
        >Task 1</a
      >
      |
      <a class="linkRoute" routerLink="/task-2" routerLinkActive="active"
        >Task 2</a
      >
      |
      <a class="linkRoute" routerLink="/task-3" routerLinkActive="active"
        >Task 3</a
      >
    </nav>

    <router-outlet />
  `,
})
export class AppComponent {}
