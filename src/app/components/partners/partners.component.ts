import { Component } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-partners",
  templateUrl: "./partners.component.html",
  styleUrls: ["./partners.component.scss"],
})
export class PartnersComponent {
  imageSize = 150;

  partners = [
    {
      img: "../../../assets/images/partners/partners-1.svg",
      name: 'Lorem Ipsum'
    },
    {
      img: "../../../assets/images/partners/partners-2.svg",
      name: 'Lorem Ipsum'
    },
    {
      img: "../../../assets/images/partners/partners-3.svg",
      name: 'Lorem Ipsum'
    },
    {
      img: "../../../assets/images/partners/partners-4.svg",
      name: 'Lorem Ipsum'
    },
    {
      img: "../../../assets/images/partners/partners-5.svg",
      name: 'Lorem Ipsum'
    },
    {
      img: "../../../assets/images/partners/partners-6.svg",
      name: 'Lorem Ipsum'
    },
    {
      img: "../../../assets/images/partners/partners-7.svg",
      name: 'Lorem Ipsum'
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    margin: 32,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 5,
      }
    },
    nav: false,
  };
}
