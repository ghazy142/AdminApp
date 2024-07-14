import { Component, OnInit } from '@angular/core';
import { GetfeedbackService } from './getfeedback.service';
import { CommonModule } from '@angular/common';
import { Feedback } from './feedback';
@Component({
  templateUrl: 'card.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class CardsComponent implements OnInit {
  feedbacks: Feedback[] = [];
  

  constructor(private getfeedbackService: GetfeedbackService) { }

  ngOnInit() {
    this.loadFeedbacks();
  }

  loadFeedbacks() {
    this.getfeedbackService.getFeedbacks().subscribe(
      (data: { feedbacks: Feedback[] }) => { // Correct type for data
        this.feedbacks = data.feedbacks; // Assign data.feedbacks to this.feedbacks
      },
      error => {
        console.error('Error fetching feedbacks', error);
      }
    );
  }
}
