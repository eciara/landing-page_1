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
      icon: '',
      title: 'Creative Solutions',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    },
    {
      id: 2,
      icon: '',
      title: 'Solid Development',
      desc: 'Sequi aut aliquam, soluta temporibus, magnam provident ducimus ad'
    },
    {
      id: 3,
      icon: '',
      title: 'Awesome Designs',
      desc: 'Incidunt cupiditate adipisci ea facere ratione accusantium qui quas.'
    },
    {
      id: 4,
      icon: '',
      title: 'Creative Solutions',
      desc: 'Ex tempora fugit excepturi fugiat aspernatur tenetur deserunt officiis.'
    },
    {
      id: 5,
      icon: '',
      title: 'Solid Development',
      desc: 'Natus iusto, animi aperiam deleniti facere, itaque quos optio suscipit.'
    },
    {
      id: 6,
      icon: '',
      title: 'Awesome Designs',
      desc: 'Nulla blanditiis aut ut natus enim autem debitis.'
    },
  ]
}
