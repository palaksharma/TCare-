import { Component, OnInit } from '@angular/core';
import { ITreeOptions,TREE_ACTIONS, KEYS, IActionMapping} from '@circlon/angular-tree-component';
import { AuthService} from '../../auth.service';

@Component({
  selector: 'app-typography',
  templateUrl: 'typography.component.html'
})
export class TypographyComponent implements OnInit {
  nodes: any = [];
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

  constructor(private authService: AuthService) {}

  getListofData(){
    this.authService.getJSONDataofJobs().subscribe(event => {
      // tslint:disable-next-line:no-string-literal
        this.nodes = event['data'];
        console.log(this.nodes);
      });
  }
  ngOnInit() {
    this.getListofData()
  }
}
