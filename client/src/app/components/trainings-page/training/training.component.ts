import { Component, OnDestroy } from '@angular/core';
import { MyServiceService } from 'src/app/services/my-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnDestroy {
  trainingsList: any;
  getTrainingsOb: Subscription;

  constructor(private myService: MyServiceService) {
    this.getTrainingsOb = this.myService.getAllTrainings().subscribe(data => {
      this.trainingsList = data;
      console.log('Received data:', this.trainingsList);
    });
  }

  ngOnDestroy(): void {
    this.getTrainingsOb.unsubscribe();
  }
}
