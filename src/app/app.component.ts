import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';
  mockData = {
    propertion: [
      {
        name: 'Review required', // 每个bar的文本信息
        color: '#F1A636', // 各自对应的color和background-color
        bars: [], // 计算，用来存放判断后最终分得的格子数
        num: 30, // 各自的数量
        total: 120, // 总数量
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
      },
    ],
  };
}
