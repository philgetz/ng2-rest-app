import { Component } from '@angular/core';

@Component({
    selector: 'app-widget',
    templateUrl: './widgets.component.html',
    styleUrls: ['./widgets.component.css']
})

export class WidgetsComponent {
selectedWidget;
// tslint:disable-next-line:member-ordering
widgets = [
  {
    'id': 1,
    'img': 'assets/img/one.png',
    'name': 'Widget 1',
    'description': 'This is a description'
  },
  {
    'id': 2,
    'img': 'assets/img/two.png',
    'name': 'Widget 2',
    'description': 'This is a description!'
  },
  {
    'id': 3,
    'img': 'assets/img/three.png',
    'name': 'Widget 3',
    'description': 'This is a lovely widget'
  }];

  selectWidget(widget) {
    this.selectedWidget = widget;
}

}
