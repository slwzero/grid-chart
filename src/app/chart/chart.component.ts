import { Component, OnInit, Input } from '@angular/core';
import { consumeBinding } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  @Input()
  mockData;
  constructor() {}
  totalBars = 50; // 一共50个小格子
  newMockData: any;
  realData = [];
  isEmpty = false;
  emptyArray = [];
  ngOnInit() {
    this.cloneMockData();
    this.setCent();
    this.setBar();
    console.log(this.newMockData);
  }
  cloneMockData() {
    // 如果传来的参数为0就直接filter掉不进入后续数据操作
    this.newMockData = JSON.parse(
      JSON.stringify(this.mockData),
    ).propertion.filter(el => {
      return el.num !== 0;
    });
    console.log('newmock data: ', this.newMockData);
  }
  // 获取每个值的百分比
  setCent() {
    this.newMockData.forEach(ele => {
      ele.cent = ((ele.num / ele.total) * 100).toFixed(0);
    });
  }
  setBar() {
    // 如果数据是空的，就显示灰色条条
    if (this.newMockData.length === 0) {
      this.isEmpty = true;
      for (let i = 0; i < this.totalBars; i++) {
        this.emptyArray.push(1);
      }
      return;
    } else {
      // [10.5, 20.3, 19.2]
      const barsAssign = this.newMockData.map(ele => {
        return (ele.num / ele.total) * this.totalBars;
      });
      let bars = []; // [10, 20, 19];
      const points = []; // [0.5, 0.3, 0.2];
      let sum = 0;

      barsAssign.forEach(ele => {
        let integer = Math.floor(ele);
        points.push(ele - integer);
        if (integer === 0) {
          integer = 1;
        }
        bars.push(integer);
        sum += integer;
      });
      while (sum < this.totalBars) {
        // 获取最大的小数位在points的索引值;进1位，
        const maxPoint = Math.max(...points);
        const index = points.indexOf(maxPoint);
        bars[index] = bars[index] + 1; // [11, 20, 19];
        points[index] = 0; // 最大points对应的bars的加1之后，就置为0，下次就不会再加。
        sum++;
      }

      // angular想遍历数字 ===》要通过转成数组方式
      bars = bars.map(ele => {
        const temp = [];
        for (let i = 0; i < ele; i++) {
          temp.push(1);
        }
        return temp;
      });
      // 填充newMockData数据里的bar作为格子数
      bars.forEach((bar, i) => {
        this.newMockData[i].bars = bar;
      });
      console.log(this.newMockData);
    }
  }
}
