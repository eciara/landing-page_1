import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  items = [
    {
      question: 'Lorem ipsum dolor sit amet.',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed eros sit amet lectus viverra ultricies ut et ipsum. Sed lobortis condimentum sem, eget consequat erat. '
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
      answer: 'Phasellus eget orci in odio mattis volutpat at ac odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer felis urna, egestas vel ex sed, faucibus euismod eros. Sed eget aliquam nisi. Vestibulum consequat pretium augue non dictum.'
    },
    {
      question: 'Lorem ipsum dolor sit amet.',
      answer: 'Vestibulum congue nisl lectus, blandit laoreet arcu volutpat id. Pellentesque eu laoreet urna, sit amet consequat eros.'
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
      answer: 'Nunc eget lacus et nibh faucibus tincidunt vitae et turpis. Praesent orci augue, mollis id justo et, aliquam pellentesque tortor. In pharetra sed magna id vehicula.'
    },
    {
      question: 'Lorem ipsum dolor sit amet.',
      answer: 'Vestibulum id sem vitae orci tincidunt lobortis a sit amet erat. Nullam nec elit suscipit, eleifend elit quis.'
    },
  ];
  expandedIndex = 0;
}
