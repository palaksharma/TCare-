import { Component, OnInit , ViewChild } from '@angular/core';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { HttpClient, HttpResponse, HttpEventType} from '@angular/common/http';
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
    this.authService.insertQueryofProjectDetails(this.user.project_id,
      this.user.project_name,
      this.user.project_desc)
    .subscribe(event => {
       console.log(event);
       this.toastr.success('Data is inserted into Database Successfully');
       this.router.navigate(['/notifications']);
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
          console.log(checkResult);
          this.user.project_id = 1;
          if (Array.isArray(result.projectDescription.name)) {
            this.user.project_name = result.projectDescription.name[0];
          } else  this.user.project_name = result.projectDescription.name;
          console.log(result);
        }
      });
    }
    console.log("!>>>>>>77",checkResult);
    reader.readAsBinaryString(file);
    this.uploadAndProgress(ev);
  }

  parseXML(data) {  
    return new Promise(resolve => {  
      var k: string | number,  
        arr = [],  
        parser = new xml2js.Parser(  
          {  
            trim: true,  
            explicitArray: true  
          });  
      parser.parseString(data, function (err, result) {  
        var obj = result;  
        debugger;
        for (k in obj.emp) {  
          var item = obj.emp[k];  
          arr.push({  
            id: item.id[0],  
            name: item.name[0],  
            gender: item.gender[0],  
            mobile: item.mobile[0]  
          });  
        }  
        resolve(arr);  
      });  
    });  
  }  

  basicUpload(files: File[]) {
    const formData = new FormData();
    Array.from(files).forEach(f => formData.append('file', f));
    this.http.post('https://file.io', formData)
      .subscribe(event => {
        console.log('done');
      });
  }

  // this will fail since file.io dosen't accept this type of upload
  // but it is still possible to upload a file with this style
  basicUploadSingle(file: File) {
    this.http.post('https://file.io', file)
      .subscribe(event => {
        console.log('done');
      });
  }

  uploadAndProgress(files: File[]) {
    console.log(files);
    const formData = new FormData();
    console.log(formData);
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
