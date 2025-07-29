import { Component } from '@angular/core';
import userData from '../../data/user-data.json';

@Component({
  selector: 'app-task1',
  imports: [],
  templateUrl: './task1.component.html',
  styleUrl: './task1.component.scss',
})
export class Task1Component {
  user = userData;
}
