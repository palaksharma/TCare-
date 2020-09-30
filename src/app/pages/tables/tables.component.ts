import { Component, OnInit } from '@angular/core';
import { ITreeOptions} from '@circlon/angular-tree-component';
import { AuthService} from '../../auth.service';
import {Router} from '@angular/router';
// import fs from 'fs'


@Component({
  selector: 'app-tables',
  templateUrl: 'tables.component.html'
})

// tslint:disable-next-line:component-class-suffix
export class TreeChecklistExample implements OnInit {
  viewTreeList: any = [];
  setting = {
    element: {
      dynamicDownload: null as HTMLElement
    }
  }
  nodes: any = [];
  options: ITreeOptions = {
    displayField: 'job_name',
    useCheckbox: true,
  };


  optionsDisabled: ITreeOptions = {
    useCheckbox: true,
    // getChildren: this.getChildren.bind(this),
    useTriState: false
  };

  constructor(private authService: AuthService , private router: Router) {}

  selectedTreeList: any = [];
  selectedTreeList1: any = [];
 
  onSelect(ev){
    if(!this.selectedTreeList.includes(ev.node.data.job_name))
    {
      this.selectedTreeList.push(ev.node.data.job_name);
    }
    console.log(this.selectedTreeList);
  }
   
  onDeselect(ev){
    if(this.selectedTreeList.includes(ev.node.data.job_name))
    {
      this.selectedTreeList = this.selectedTreeList.filter(item => item !== ev.node.data.job_name);
    }
    console.log(this.selectedTreeList);
  }
  onSelectBestPractice(ev){
    if(!this.selectedTreeList1.includes(ev.node.data.job_name))
    {
      this.selectedTreeList1.push(ev.node.data.job_name);
    }
    console.log(this.selectedTreeList1);
  }
   
  onDeselectBestPractice(ev){
    if(this.selectedTreeList1.includes(ev.node.data.job_name))
    {
      this.selectedTreeList1 = this.selectedTreeList1.filter(item => item !== ev.node.data.job_name);
    }
    console.log(this.selectedTreeList1);
  }

  bindTreeTable() {
    this.authService.getListofJobs().subscribe(event => {
        this.nodes = event['result']
        console.log(this.nodes);
      });
  }

  navigateToRTL() {
    localStorage.clear();
    localStorage.setItem('Best', JSON.stringify(this.selectedTreeList));
    localStorage.setItem('Naming', JSON.stringify(this.selectedTreeList1));
    this.router.navigate(['/rtl']);
  }

  ngOnInit() {
    localStorage.clear();
    this.bindTreeTable();
    this.selectedTreeList = [];
   // this.dynamicDownloadTxt();
  }
}



