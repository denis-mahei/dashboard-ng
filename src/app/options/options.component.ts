import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-options',
  imports: [MatButton],
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss',
})
export class OptionsComponent {
  @Output() onLeaveFeedback = new EventEmitter<'good' | 'neutral' | 'bad'>();
  @Output() onResetFeedback = new EventEmitter<void>();
}
