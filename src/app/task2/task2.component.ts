import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import friends from '../../data/friends-data.json';

@Component({
  selector: 'app-task2',
  imports: [NgClass],
  templateUrl: './task2.component.html',
  styleUrl: './task2.component.scss',
})
export class Task2Component {
  data = friends;
}
