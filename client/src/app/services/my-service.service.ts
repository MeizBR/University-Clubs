import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private baseUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {
  }

  getAllTrainings(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trainings`);
  }

  addInscription(inscriptionData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addInscription`, inscriptionData);
  }
}
