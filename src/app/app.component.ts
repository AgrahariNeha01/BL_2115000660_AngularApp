import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'helloworld';
  imgUrl = "./assets/BL_logo_square_jpg.jpg";

  ngOnInit(): void 
  {
    this.title ="hello form bridgelabz";
  }
}
