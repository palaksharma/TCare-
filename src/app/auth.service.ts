import { HttpClient } from '@angular/common/http';
// import { NG_AUTH_TOKEN } from 'app/common/ng-constants';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface bestPracticeModel {
  practise_id: number,
  component_name: string 
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
  }

  /* To generate and get authToken from API endpoints. */
  validateLogin(username: string, password: string) {
    return this.http.post('/validateLogin/', {
      // tslint:disable-next-line:object-literal-shorthand
      username: username,
      // tslint:disable-next-line:object-literal-shorthand
      password: password,
    });
  }

  insertQueryofProjectDetails(user1 , user2, user3) {
    let data = {
      Project_id: user1,
      Project_name: user2,
      Project_desc: user3
    }
    return this.http.get('/configuration?Project_id='+user1+'&Project_name='+user2+'&Project_desc=testDescription')
  }

  getListofJobs() {
    return this.http.get('/incident');
  }

  getListofBestPractices() {
    return this.http.get <bestPracticeModel>('/jobs');
  }

 getListofNamingConvention() {
  return this.http.get('/performance');
 }

 getJSONDataofJobs(){
  return this.http.get('/status');
 }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
