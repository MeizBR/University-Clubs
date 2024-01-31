import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ExtraOptions } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrainingComponent } from './components/trainings-page/training/training.component';
import { TrainingsMainPageComponent } from './components/trainings-page/trainings-main-page/trainings-main-page.component';
import { WorkshopComponent } from './components/workshops/workshop/workshop.component';
import { WorkshopsMainPageComponent } from './components/workshops/workshops-main-page/workshops-main-page/workshops-main-page.component';
import { HttpClientModule } from '@angular/common/http';

const routerConfig: ExtraOptions = {
  onSameUrlNavigation: 'reload',
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TrainingComponent,
    TrainingsMainPageComponent,
    WorkshopComponent,
    WorkshopsMainPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
