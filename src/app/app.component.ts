import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    counters = [];
    showFlag = true;

    onButtonClick() {
        this.showFlag = !this.showFlag;
        // this.counters.push(this.counters.length + 1);
        this.counters.push(new Date());
    }
}
