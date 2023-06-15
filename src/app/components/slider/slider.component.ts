import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent  {
  images = [
    {
      src: '../../../assets/images/slider-1.jpg',
      alt: 'Contrary to popular'
    },
    {
      src: '../../../assets/images/slider-2.jpg',
      alt: 'Lorem Ipsum is not simply '
    },
    {
      src: '../../../assets/images/slider-3.jpg',
      alt: 'Lorem ipsum dolor sit amet,'
    },
  ]

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }
}
