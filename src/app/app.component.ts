import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    title : "Première Application"
  }

  onLogoClicked() {
    this.data.title = "Et oui!!";
  }

  onKeyUp(newTitle : string) {
    this.data.title = newTitle;
  }
}
