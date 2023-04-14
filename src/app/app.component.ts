import { Component } from '@angular/core';
import {
  SwipelistData,
  SwipelistState,
  SwipelistOptions,
} from '@nhochdrei/angular-swipe-list';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'swipe-list-demo';

  statesToInsert: SwipelistState[] = [
    {
      value: 'X',
      color: '#505050',
      label: 'XMas',
    },
    {
      value: 'A',
      color: '#0FE2A3',
      label: 'Aprovar',
      matIcon: 'code',
    },
    {
      value: 'Y',
      color: '#FF5757',
      label: 'Rejeitar',
      customIcon: '<span>T 9500</span>',
    },
  ];

  options: SwipelistOptions = {
    states: this.statesToInsert,
    statePanelWidth: '60px',
    stateFontSize: '12pt',
    colorCenter: 'rgb(37, 39, 44)',
    colorStatePanel: 'rgb(0, 0, 0)',
    colorText: '#1E3241',
    borderRadius: '4px',
    height: '100px',
    listFontsize: '12pt',
    minSwipePercent: 30,
    maxSwipePx: 300,
  };

  dataArray: SwipelistData[] = [
    {
      label: 'Test3',
      defaultStartIndex: 2,
    },
  ];

  onOutput(event): void {
    const newData: SwipelistData = event;
    console.log(newData);
  }
}
