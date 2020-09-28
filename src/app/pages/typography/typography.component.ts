import { Component, OnInit } from '@angular/core';
import { ITreeOptions, TREE_ACTIONS, KEYS, IActionMapping } from '@circlon/angular-tree-component';
import { AuthService } from '../../auth.service';
import { groupBy } from 'lodash-es'

@Component({
  selector: 'app-typography',
  templateUrl: 'typography.component.html'
})
export class TypographyComponent implements OnInit {
  nodes: any = [];
  InputData: any = {};
  OutputData: any = {};
  TransformData: any = {};
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

  constructor(private authService: AuthService) { }

  getListofData() {
    this.authService.getInputSourceData().subscribe(event => {
      // tslint:disable-next-line:no-string-literal
      this.states = groupBy(event['result'], 'unique_name');
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
    });
  }
  ngOnInit() {
    this.getListofData()
  }
}
