import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './app.grocery.html',
  styleUrls: [


  ]
})
export class GroceryComponent {
  task: string;
  tasks = [];
  onClick() {
    this.tasks.push({ name: this.task });
    this.task = '';
  }
}
