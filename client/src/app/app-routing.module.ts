import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrainingComponent } from './components/trainings/training.component';
import { InscriptionsComponent } from './components/inscriptions/inscriptions.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: "Home"
  },
  {
    path: 'trainings',
    component: TrainingComponent,
    title: "Trainings"
  },
  {
    path: 'inscriptions',
    component: InscriptionsComponent,
    title: "Inscriptions"
  },
  {
    path: 'feedbacks',
    component: FeedbacksComponent,
    title: "Feedbacks"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
