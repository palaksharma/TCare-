import { Component, OnInit , ViewChild } from '@angular/core';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { HttpClient, HttpResponse, HttpHeaders , HttpEventType} from '@angular/common/http';
import { AuthService} from '../../auth.service';
import {Router} from '@angular/router';
import xml2js from 'xml2js'; 
import * as XLSX from 'xlsx';
import { parseString } from'xml2js';

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
}

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html'
})
export class MapComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective;
  percentDone: number;
  uploadSuccess: boolean;
  spinner:any;
  public canvas: any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public user = {
    project_id: 0,
    project_name: '',
    project_desc: ''
  };
  public xmlItems: any; 
  reader = new FileReader()

  constructor( private router: Router , private http: HttpClient, private authService: AuthService , private toastr: ToastrService) { }

  ngOnInit() {  this.toastr.overlayContainer = this.toastContainer; }

  insertQuery() {
    this.spinner = true;
    this.authService.insertQueryofProjectDetails(this.user.project_id,
      this.user.project_name,
      this.user.project_desc)
    .subscribe(event => {
      setTimeout (() => {
        this.spinner = false;
        this.toastr.success('Data is inserted into Database Successfully');
        this.router.navigate(['/typography']);
     }, 10000);

       
    });
  }


  upload(ev) {
    let checkResult;
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = reader.result;
      parseString(data, { explicitArray: false }, (error, result) => {
        if (error) {
          throw new Error(error);
        } else {
          checkResult = result;
          console.log('Check Result', checkResult);
          console.log();
          this.user.project_id = 1;
          this.user.project_name = checkResult["xmi:XMI"]["TalendProperties:Project"].$.label;
          this.user.project_desc= checkResult["xmi:XMI"]["TalendProperties:Project"].$.description;
        }
      });
    }
    reader.readAsBinaryString(file);
    this.uploadAndProgress(ev);
  }

  

  uploadAndProgress(files: File[]) {
    const formData = new FormData();
    Array.from(files).forEach(f => formData.append('file', f));

    this.http.post('https://file.io', formData, { reportProgress: true, observe: 'events' })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
      });
  }
}
