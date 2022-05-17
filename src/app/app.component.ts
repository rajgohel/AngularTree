import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tree';
  nodes = [];

  constructor(
    private apiService: ApiService
  ) {
    this.apiService.getTreeItems({ "level": 1 }).subscribe((data) => {
      this.nodes = [data];
      this.apiService.getTreeItems({ "level": 2 }).subscribe((data2) => {
        for (let i = 0; i < data.children.length; i++) {
          let isChildrenExists = data2.termsrelation.filter(ele => ele.rel === data.children[i].name);
          if (isChildrenExists) data.children[i].children = isChildrenExists[0].terms;
        }
      });
    });
  }
}
