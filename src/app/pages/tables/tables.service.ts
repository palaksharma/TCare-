import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class IncidentService {
    constructor(private http: HttpClient, private router: Router) {}

    validateincidents() {
        return this.http.post('/incident', null);
      }
}
