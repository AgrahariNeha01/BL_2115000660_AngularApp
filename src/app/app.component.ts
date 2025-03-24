import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  userName: string = '';  
  errorMsg: string = '';  

  validateInput() {
    const regex = /^[A-Z][a-zA-Z]{2,}$/;  // Initial Caps + Min 3 letters
    if (!regex.test(this.userName)) {
      this.errorMsg = 'Invalid Name! First letter should be capital & min 3 letters required.';
    } else {
      this.errorMsg = '';  // No error
    }
  }
}
