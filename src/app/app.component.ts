import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatToolbar } from '@angular/material/toolbar';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FeedbackComponent } from './feedback/feedback.component';
import { OptionsComponent } from './options/options.component';
import { NotificationComponent } from './notification/notification.component';

@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatCardModule,
    FeedbackComponent,
    OptionsComponent,
    NotificationComponent,
    MatDivider,
    MatToolbar,
    NgIf,
    FormsModule,
  ],
  templateUrl: `app.component.html`,
  styleUrl: `app.component.scss`,
})
export class AppComponent {
  feedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  resetFeedback() {
    this.feedback = { good: 0, neutral: 0, bad: 0 };
    localStorage.removeItem('feedback');
  }

  updateFeedback(type: 'good' | 'neutral' | 'bad') {
    this.feedback[type]++;
    localStorage.setItem('feedback', JSON.stringify(this.feedback));
  }

  get totalFeedback(): number {
    return this.feedback.good + this.feedback.neutral + this.feedback.bad;
  }

  ngOnInit() {
    const savedFeedback = localStorage.getItem('feedback');
    if (savedFeedback) {
      this.feedback = JSON.parse(savedFeedback);
    }
  }
}
