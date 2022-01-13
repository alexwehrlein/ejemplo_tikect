import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tickt';
  
  imprimir() {
    let element: HTMLElement = document.getElementsByClassName(
      'btnPrint'
    )[0] as HTMLElement;
    element.click();
  }
  
}
