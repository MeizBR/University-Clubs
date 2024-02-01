import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) {
  }

  getAllTrainings() {
    return this.http.get("http://localhost:5000/api/trainings");
  }
}
