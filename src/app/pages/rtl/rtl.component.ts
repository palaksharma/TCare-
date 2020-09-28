import { Component, OnInit } from '@angular/core';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { HttpClient, HttpResponse, HttpEventType} from '@angular/common/http';
import { AuthService} from '../../auth.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-rtl',
  templateUrl: 'rtl.component.html'
})
export class RtlComponent implements OnInit {

  bestPractices:any = [];

  namingConvention: any = [];
  constructor( private router: Router , private http: HttpClient, private authService: AuthService , private toastr: ToastrService) { }

  getDataofBestPractices() {
    let item1 = JSON.parse(localStorage.getItem('Best'));
    let item2 = JSON.parse(localStorage.getItem('Naming'));
    this.authService.getListofBestPractices(item1, item2).subscribe(event => {
      // tslint:disable-next-line:no-string-literal
      this.bestPractices = event['result'];
      console.log("Best Practice", this.bestPractices);
   });
  }

  getDataofNamingConvention() {
    let item1 = JSON.parse(localStorage.getItem('Best'));
    let item2 = JSON.parse(localStorage.getItem('Naming'));
    this.authService.getListofNamingConvention(item1 , item2).subscribe(event => {
      console.log(event);
      // tslint:disable-next-line:no-string-literal
      this.namingConvention = event['result'];
   });
  }

  ngOnInit() {
    this.getDataofBestPractices();
    this.getDataofNamingConvention();
  }
}
