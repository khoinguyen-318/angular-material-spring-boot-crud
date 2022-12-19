import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App-frontend';
  key:string = "";
  onSearch(key:string){
    console.log(key);
  }
}
