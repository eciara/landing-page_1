import { Component } from '@angular/core';
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'landing-page-1';

  cards = [
    {
      id: 1,
      icon: 'co_present',
      title: 'Creative Solutions',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    },
    {
      id: 2,
      icon: 'moving',
      title: 'Solid Development',
      desc: 'Sequi aut aliquam, soluta temporibus, magnam provident ducimus ad'
    },
    {
      id: 3,
      icon: 'screen_rotation',
      title: 'Awesome Designs',
      desc: 'Incidunt cupiditate adipisci ea facere ratione accusantium qui quas.'
    },
    {
      id: 4,
      icon: 'shopping_cart_checkout',
      title: 'Creative Solutions',
      desc: 'Ex tempora fugit excepturi fugiat aspernatur tenetur deserunt officiis.'
    },
    {
      id: 5,
      icon: 'call_missed_outgoing',
      title: 'Solid Development',
      desc: 'Natus iusto, animi aperiam deleniti facere, itaque quos optio suscipit.'
    },
    {
      id: 6,
      icon: 'manage_history',
      title: 'Awesome Designs',
      desc: 'Nulla blanditiis aut ut natus enim autem debitis.'
    },
  ]

  testimonials = [
    {
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin, turpis ut.',
      avatar: '../../../assets/images/testimonials/avatar-1.jpg',
      person: 'Jakob Huffman',
      position: 'Graphic Designer'
    },
    {
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
      avatar: '../../../assets/images/testimonials/avatar-2.jpg',
      person: 'Marisa Sherwood',
      position: 'Web Developer'
    },
    {
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin, turpis ut pulvinar tempus, ante.',
      avatar: '../../../assets/images/testimonials/avatar-3.jpg',
      person: 'Kyler Lancaster',
      position: 'Web Designer'
    },
    {
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
      avatar: '../../../assets/images/testimonials/avatar-4.jpg',
      person: 'Melina Knight',
      position: 'Web Developer'
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
