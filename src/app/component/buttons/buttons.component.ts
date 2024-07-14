import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { AddplaygroundService } from './addplayground.service';



@Component({
  selector: 'app-ngbd-buttons',
  standalone: true,
  templateUrl: 'buttons.component.html',
  imports: [
    FormsModule, ReactiveFormsModule , NgFor
  ]
})
export class NgbdButtonsComponent  {
  playgroundId: any;
  isAccepted:  boolean = false;
  constructor(private addplaygroundService: AddplaygroundService) { }
  acceptPlayground() {
    this.addplaygroundService.acceptPlayground(this.playgroundId, this.isAccepted).subscribe(
      response => {
        console.log('Response:', response);
        alert(response.message);
      },
      error => {
        console.error('Error:', error);
        alert('Failed to accept playground.');
      }
    );
  }
}
