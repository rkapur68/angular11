import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  n = 'Rajeev Kapur';
  img =
    'https://image-us.samsung.com/us/smartphones/galaxy-s24/gallery/FNL_Gallery_Base_800x600_Slide_Exclusive_Colors_1.jpg?$product-details-jpg$';
  title = 'Galaxy S24';
  price = '$799.99';
  isNotAvailable = false;
  counter = 0;
  fun() {
    alert('You clicked on button');
  }

  count() {
    this.counter++;
  }
}
