import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetplaygroundService } from './getplayground.service';
import { Playground, PlaygroundPicture } from './playground';

@Component({
  templateUrl: 'badge.component.html'
})
export class BadgeComponent implements OnInit {
  playgroundId: any;
  playground: any; // Define the type based on your API response structure
  playgroundPictures: PlaygroundPicture[] = []; // Array to store pictures

  constructor(
    private route: ActivatedRoute,
    private getplaygroundService: GetplaygroundService // Inject your service here
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.playgroundId = +params['id']; // Get the ID from route parameter
      this.loadPlaygroundDetails(this.playgroundId);
    });
  }

  loadPlaygroundDetails(id: number) {
    this.getplaygroundService.getPlaygroundById(id).subscribe(
      (data: any) => {
        this.playground = data.playground; // Assign fetched playground data to class property
        this.playgroundPictures = data.playgroundPictures || []; // Assign pictures to the array
      },
      error => {
        console.error('Error fetching playground details', error);
      }
    );
  }
}
