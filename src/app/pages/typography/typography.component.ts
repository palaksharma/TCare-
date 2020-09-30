import { Component, OnInit } from '@angular/core';
import { ITreeOptions, TREE_ACTIONS, KEYS, IActionMapping } from '@circlon/angular-tree-component';
import { AuthService } from '../../auth.service';
import {ExcelService} from '../../excel.service';
import { groupBy } from 'lodash-es';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-typography',
  templateUrl: 'typography.component.html',
  styleUrls:['typography.component.css']
})
export class TypographyComponent implements OnInit {
  nodes: any = [];
  jobList: any = [];
  parameterSelected:any;
  dataOfContextParameter: any = ['DEFAULT','SIT'];
  contextList:any = [];
  connectionList: any = [];
  InputData: any = {};
  excelData:any;
  OutputData: any = {};
  TransformData: any = {};
  accordianInputData: any = {};
  accordianTransformData: any = {};
  accordianOutputData:any = {};
  data = [{"isActive": false} , {"isActive": false} , 
  {"isActive": false},{"isActive": false},{"isActive": false}]
  jobValue:any;
  states: any;
  options: ITreeOptions = {
    displayField: 'name',
    isExpandedField: 'expanded',
    idField: 'uuid',
    hasChildrenField: 'nodes',
    actionMapping: {
      mouse: {
        dblClick: (tree, node, $event) => {
          if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
        }
      },
      keys: {
        [KEYS.ENTER]: (tree, node, $event) => {
          node.expandAll();
        }
      }
    },
    nodeHeight: 23,
    allowDrag: (node) => {
      return true;
    },
    allowDrop: (node) => {
      return true;
    },
    allowDragoverStyling: true,
    levelPadding: 10,
    useVirtualScroll: true,
    animateExpand: true,
    scrollOnActivate: true,
    animateSpeed: 30,
    animateAcceleration: 1.2,
    scrollContainer: document.documentElement // HTML
  };

  constructor(private authService: AuthService, private excelService:ExcelService) { 
  
  }
  exportAsXLSX(data):void {
    console.log(data);
    this.excelService.exportAsExcelFile(this.excelData, 'Xml_Data_download');
  }


  getListofData() {
    this.authService.getInputSourceData(this.jobValue).subscribe(event => {
      // tslint:disable-next-line:no-string-literal
      this.excelData=event['result'];
      this.states = groupBy(event['result'], 'unique_name');
      console.log(this.states);
      console.log(this.states);
      for (const key in this.states) {
        let value = this.states[key];
        if (value[0].component_group == 'Input') {
          this.InputData[key] = value;

        } else if (value[0].component_group == 'Output') {
          this.OutputData[key] = value;
        } else {
          this.TransformData[key] = value;
        }
      }
      console.log(JSON.stringify(this.InputData));
      console.log(this.OutputData);
      console.log(this.TransformData);
    });
    this.valueOfConnections();
  }
  getListOfJobs(ev){
    this.jobValue=ev.target.value;
    this.getListofData();
  }

  getChangeValue(ev){
    this.parameterSelected=ev.target.value;
    this.showListofContextParameters();
  }

  showListofContextParameters(){
    this.authService.getListofContextParameter(this.jobValue).subscribe(event => {
      // tslint:disable-next-line:no-string-literal
       this.contextList = event['result'];
       console.log(this.contextList);
    });
  }

  bindDropdown(){
    this.authService.getListofJobsForDropdown().subscribe(event => {
      // tslint:disable-next-line:no-string-literal
       this.jobList = event['result'];
       console.log(this.jobList);
    });

  }
  toggleAccordian(event, index) {
    var element = event.target;
    element.classList.toggle("active");
    if(this.data[index].isActive) {
      this.data[index].isActive = false;
    } else {
      this.data[index].isActive = true;
    }      
    var panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

toggleAccordian2(event, key) {
  var element = event.target;
  element.classList.toggle("active");
  // if(this.accordianInputData[key].isActive) {
    this.accordianInputData[key] = !this.accordianInputData[key];
  // } else {
  //   this.accordianInputData[key].isActive = true;
  // }      
  var panel = element.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

toggleAccordian3(event, key){
  var element = event.target;
  element.classList.toggle("active");
  // if(this.accordianInputData[key].isActive) {
    this.accordianTransformData[key] = !this.accordianTransformData[key];
  // } else {
  //   this.accordianInputData[key].isActive = true;
  // }      
  var panel = element.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

toggleAccordian4(event, key){
  var element = event.target;
  element.classList.toggle("active");
  // if(this.accordianInputData[key].isActive) {
    this.accordianOutputData[key] = !this.accordianOutputData[key];
  // } else {
  //   this.accordianInputData[key].isActive = true;
  // }      
  var panel = element.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

valueOfConnections(){
  this.authService.getListofConnections(this.jobValue).subscribe(event => {
    console.log(this.jobValue);
    // tslint:disable-next-line:no-string-literal
     this.connectionList = event['result'];
     console.log(this.connectionList);
  });
}
  ngOnInit() {
    this.bindDropdown();
    
  }
}
