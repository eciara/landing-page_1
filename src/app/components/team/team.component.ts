import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  isVisible: boolean = false;
  // hideList(){
  //   this.isVisible = !this.isVisible;
  // }

  cardTeam = [
    {
      id: 1,
      image: '../../../assets/images/our-team/our-team-1.jpg',
      name: 'Rodney Ellis',
      position: 'Web Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit euismod augue sed cursus.'
    },
    {
      id: 2,
      image: '../../../assets/images/our-team/our-team-2.jpg',
      name: 'Bryanna Sampson',
      position: 'Web Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non.'
    },
    {
      id: 3,
      image: '../../../assets/images/our-team/our-team-3.jpg',
      name: 'Jackeline Fanning',
      position: 'Graphic Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida erat libero.'
    },
  ]
}
