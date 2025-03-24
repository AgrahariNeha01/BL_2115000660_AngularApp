import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  title = 'helloworld';
  imgUrl = "assets/BL_logo_square_jpg.jpg"; // ✅ Correct image path
  url = "https://www.bridgelabz.com";

  ngOnInit(): void {
    this.title = "hello from Bridgelabz";
  }

  onClick($event: Event) { // ✅ Corrected parameter type
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
}
