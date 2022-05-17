import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  @Input() treeData: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  toggleChild(node) {
    node.showChildren = !node.showChildren;
  }

}
