import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title="Helloworld";
  imgUrl="assets/BL_logo_sqaure_jpg.jpg";
  url = "https://www.bridgelabz.com";
  
  ngOnInit(): void{
    this.title= "hello from bridgelabz"
  }
  onClick(Sevent: Event) { 
    console.log("Save button is clicked!", Sevent);
    window.open(this.url, "_blank"); 
  }
}
