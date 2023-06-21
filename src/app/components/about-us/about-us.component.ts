import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  counters = [
    {
      number: 600,
      desc: 'projects'
    },
    {
      number: 300,
      desc: 'clients'
    },
    {
      number: 850,
      desc: 'hours'
    },
  ]
}
