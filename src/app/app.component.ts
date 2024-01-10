import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputText: string = '';
  inputTextLength: number = 0;

  onInputChange(event: Event) {
    // Retrieve the entered text from the input event
    const target = event.target as HTMLInputElement;
    this.inputText = target.value;

    // Update the length of the entered string
    this.inputTextLength = this.inputText.length;
  }
}
