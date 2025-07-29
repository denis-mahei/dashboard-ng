import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';

export const routes: Routes = [
  { path: '', title: 'App Home Page', component: HomeComponent },
  { path: 'task-1', title: 'Task 1', component: Task1Component },
  { path: 'task-2', title: 'Task 2', component: Task2Component },
  { path: 'task-3', title: 'Task 3', component: Task3Component },
];
