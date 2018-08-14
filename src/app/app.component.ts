import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  mockData = {
    propertion: [
      {
        name: 'Review required',
        color: '#F1A636',
        bars: [], // 计算
        num: 30,
        total: 120,
      },
      {
        name: 'Issue confirmed',
        color: '#398F90',
        bars: [],
        num: 25,
        total: 120,
      },
      {
        name: 'No issue',
        color: '#8DA656',
        bars: [],
        num: 11,
        total: 120,
      },
      {
        name: 'issue 2',
        color: '#933401',
        bars: [],
        num: 34,
        total: 120,
      },
      {
        name: 'Issue 3',
        color: '#F06300',
        bars: [],
        num: 20,
        total: 120,
      },{
        name: 'Issue 3',
        color: '#ff99bb',
        bars: [],
        num: 2,
        total: 120,
      },
      {
        name: 'Issue 3',
        color: '#33d6ff',
        bars: [],
        num: 6,
        total: 120,
      },
      {
        name: 'Issue 3',
        color: '#bf8040',
        bars: [],
        num: 8,
        total: 120,
      },
      {
        name: 'Issue 3',
        color: '#bf4080',
        bars: [],
        num: 4,
        total: 120,
      },
    ]
  };
}
