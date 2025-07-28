import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', title: 'App Home Page', component: HomeComponent },
  { path: 'task-1', title: 'Task 1', component: UserComponent },
  { path: 'task-2', title: 'Task 2', component: UserComponent },
  { path: 'task-3', title: 'Task 3', component: UserComponent },
];
