import { HttpClient,HttpHeaders } from '@angular/common/http';
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
    return this.http.get('/configuration?Project_id='+user1+'&Project_name='+user2+'&Project_desc='+user3)
  }

  getListofJobsForDropdown(){
    return this.http.get('/jobList');
  }
  getListofJobs() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get('/incident');
  }

  getListofBestPractices(item1, item2) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<bestPracticeModel>('/jobs', {"namingConvetionList": item1 , "bestPracticeList":item2}, { 'headers': headers });
  }

 getListofNamingConvention( item1, item2) {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post('/performance', {"namingConvetionList": item1 , "bestPracticeList":item2}, { 'headers': headers });
 }

 getListofContextParameter(item1){
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post('/parameter', {"parameterValue": item1 }, { 'headers': headers });
 }

 getJSONDataofJobs(){
  return this.http.get('/status');
 }

 getListofConnections(item1){
   console.log(item1);
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post('/connections', {"job_name": item1 }, { 'headers': headers });
 }

 getInputSourceData(jobValue){
  return this.http.get('/talend?Job_name='+jobValue);
 }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
