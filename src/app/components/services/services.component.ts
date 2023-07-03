import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
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
}
