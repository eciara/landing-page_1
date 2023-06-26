import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  cardTeam = [
    {
      image: '../../../assets/images/our-team/our-team-1.jpg',
      name: 'Rodney Ellis',
      position: 'Web Developer'
    },
    {
      image: '../../../assets/images/our-team/our-team-2.jpg',
      name: 'Bryanna Sampson',
      position: 'Web Designer'
    },
    {
      image: '../../../assets/images/our-team/our-team-3.jpg',
      name: 'Jackeline Fanning',
      position: 'Graphic Designer'
    },
  ]
}
