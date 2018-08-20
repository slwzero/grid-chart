import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.scss"]
})
export class ChartComponent implements OnInit {
  @Input()
  mockData;
  constructor() {}
  totalBars = 50; // 一共50个小格子
  newMockData: any;
  ngOnInit() {
    // this.mockData.propertion[0].num = 100;
    this.cloneMockData();
    this.setCent();
    this.setBar();
  }
  cloneMockData() {
    this.newMockData = JSON.parse(JSON.stringify(this.mockData));
  }
  // 获取每个值的百分比
  setCent() {
    this.newMockData.propertion.forEach(ele => {
      ele.cent = ((ele.num / ele.total) * 100).toFixed(0);
    });
  }
  setBar() {
    // [10.5, 20.3, 19.2]
    const barsAssign = this.newMockData.propertion.map(ele => {
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
      this.newMockData.propertion[i].bars = bar;
    });
  }
}
