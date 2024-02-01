import { Component, OnDestroy } from '@angular/core';
import { MyServiceService } from 'src/app/services/my-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css']
})
export class InscriptionsComponent implements OnDestroy {
  trainingsList: any;
  getTrainingsOb: Subscription;

  inscriptionData: any = {
    student_firstname: '',
    student_lastname: '',
    student_section: '',
    student_year: '',
    training_name: ''
  };

  constructor(private myService: MyServiceService) {
    this.getTrainingsOb = this.myService.getAllTrainings().subscribe(data => {
      this.trainingsList = data;
      console.log('Received data:', this.trainingsList);
    });
  }

  addInscription() {
    this.myService.addInscription(this.inscriptionData).subscribe(response => {
      console.log('Inscription added successfully:', response);
    });
  }

  ngOnDestroy(): void {
    this.getTrainingsOb.unsubscribe();
  }
}
