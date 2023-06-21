import { Component } from '@angular/core';

export interface Card {
  cols: number;
  rows: number;
  image: string;
}

@Component({
  selector: 'app-our-mision',
  templateUrl: './our-mision.component.html',
  styleUrls: ['./our-mision.component.scss']
})

export class OurMisionComponent {
  boxes = [
    {
      icon: 'redeem',
      title: 'Creating A Uniq Experience',
      desc: 'Eligendi explicabo, deleniti blanditiis sequi tempore architecto.'
    },
    {
      icon: 'app_registration',
      title: 'Adding More Value',
      desc: 'Similique fugit, pariatur magnam veniam totam ducimus.'
    },
    {
      icon: 'query_stats',
      title: 'Fulfill Your Dreams',
      desc: 'Aliquid cupiditate fugit illo, tempora temporibus voluptas at.'
    },
  ]

  cards: Card[] = [
    {
      cols: 1, 
      rows: 4,
      image: '../../../assets/images/our-mision-1.jpg'
    },
    {
      cols: 1, 
      rows: 4,
      image: '../../../assets/images/our-mision-2.jpg'
    },
    {
      cols: 2, 
      rows: 3,
      image: '../../../assets/images/our-mision-3.jpg'
    },
  ];
}
