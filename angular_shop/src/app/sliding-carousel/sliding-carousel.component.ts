import { Component } from '@angular/core';

@Component({
  selector: 'app-sliding-carousel',
  standalone: true,
  imports: [],
  templateUrl: './sliding-carousel.component.html',
  styleUrl: './sliding-carousel.component.css'
})
export class SlidingCarouselComponent {
  isSlidingLeft = false;
  isSlidingRight = false;

  slideLeft() {
    this.isSlidingLeft = true;
    setTimeout(() => {
      this.isSlidingLeft = false;
    }, 1000); // Durata animației în milisecunde
  }

  slideRight() {
    this.isSlidingRight = true;
    setTimeout(() => {
      this.isSlidingRight = false;
    }, 1000); // Durata animației în milisecunde
  }
}
