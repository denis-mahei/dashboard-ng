import { Component, Input } from '@angular/core';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-feedback',
  imports: [MatCard],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
})
export class FeedbackComponent {
  @Input() feedback!: {
    good: number;
    neutral: number;
    bad: number;
  };

  get totalFeedback(): number {
    return this.feedback.good + this.feedback.neutral + this.feedback.bad;
  }

  get positiveFeedback(): number {
    return this.totalFeedback > 0
      ? Math.round((this.feedback.good / this.totalFeedback) * 100)
      : 0;
  }
}
