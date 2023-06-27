import { Component } from '@angular/core';
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials = [
    {
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin, turpis ut.',
      avatar: '../../../assets/images/testimonials/avatar-1.jpg',
      person: 'Jakob Huffman'
    },
    {
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
      avatar: '../../../assets/images/testimonials/avatar-2.jpg',
      person: 'Marisa Sherwood'
    },
    {
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin, turpis ut pulvinar tempus, ante.',
      avatar: '../../../assets/images/testimonials/avatar-3.jpg',
      person: 'Kyler Lancaster'
    },
    {
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
      avatar: '../../../assets/images/testimonials/avatar-4.jpg',
      person: 'Melina Knight'
    },
  ]

  testimonialsOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    margin: 32,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
    nav: true,
    navText: [ '<i class="fa-chevron-left"></i>', '<i class="fa-chevron-right></i>"' ]
  };
}
