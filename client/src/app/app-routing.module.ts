import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TrainingsMainPageComponent } from './components/trainings-page/trainings-main-page/trainings-main-page.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    title: "Home",
  },
  {
    path: 'trainings',
    component: TrainingsMainPageComponent,
    title: "Trainings"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
