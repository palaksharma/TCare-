import { Component, OnInit } from '@angular/core';
import { ITreeOptions} from '@circlon/angular-tree-component';
import { AuthService} from '../../auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-tables',
  templateUrl: 'tables.component.html'
})

// tslint:disable-next-line:component-class-suffix
export class TreeChecklistExample implements OnInit {
  viewTreeList: any = [];
  nodes: any = [];
  options: ITreeOptions = {
    displayField: 'Job_name',
    useCheckbox: true,
  };

  optionsDisabled: ITreeOptions = {
    useCheckbox: true,
    // getChildren: this.getChildren.bind(this),
    useTriState: false
  };

  constructor(private authService: AuthService , private router: Router) {}

  bindTreeTable() {
    this.authService.getListofJobs().subscribe(event => {
      // tslint:disable-next-line:no-string-literal
        this.nodes = event['result']
        console.log(this.nodes);
      });
  }

  navigateToRTL() {
    this.router.navigate(['/rtl']);
  }

  ngOnInit() {
    this.bindTreeTable();
  }
}



