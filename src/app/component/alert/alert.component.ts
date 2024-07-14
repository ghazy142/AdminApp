import { Component, OnInit } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';
import { PendingService } from './pending.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngbd-alert',
  standalone: true,
  imports: [NgbAlertModule, NgFor, NgIf],
  templateUrl: 'alert.component.html',
  styles: [],
})
export class NgbdAlertBasicComponent implements OnInit {
  pendingPlaygrounds: any[] = [];

  constructor(private pendingService: PendingService, private router: Router) {}

  ngOnInit(): void {
    this.loadPendingPlaygrounds();
  }

  loadPendingPlaygrounds(): void {
    this.pendingService.getPendingPlaygrounds().subscribe(
      (data) => {
        this.pendingPlaygrounds = data.playgrounds; // Assuming 'playgrounds' is the array in your response
      },
      (error) => {
        console.error('Error fetching pending playgrounds', error);
      }
    );
  }

  navigateToBadge(playgroundId: number) {
    this.router.navigate(['/component/badges', playgroundId]);
  }
}
