import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent {
  @Input()
  position: any;

socialMedia = [
  {
    href: 'https://twitter.com/',
    title: 'fa-twitter'
  },
  {
    href: 'https://www.facebook.com/',
    title: 'fa-square-facebook'
  },
  {
    href: 'https://www.instagram.com/',
    title: 'fa-instagram'
  },
  {
    href: 'https://www.linkedin.com/',
    title: 'fa-linkedin'
  },
]
}
