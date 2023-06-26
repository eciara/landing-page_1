import { Component, Output } from "@angular/core";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
})
export class PortfolioComponent {
  listButtons = [
    {
      title: "All",
    },
    {
      title: "Consulting",
    },
    {
      title: "Social media",
    },
    {
      title: "Blog",
    },
  ];

  portfolioGallery = [
    {
        id: 1,
        image: '../../../assets/images/portfolio/portfolio-1.jpg'
    },
    {
        id: 2,
        image: '../../../assets/images/portfolio/portfolio-2.jpg'
    },
    {
        id: 3,
        image: '../../../assets/images/portfolio/portfolio-3.jpg'
    },
    {
        id: 4,
        image: '../../../assets/images/portfolio/portfolio-4.jpg'
    },
    {
        id: 5,
        image: '../../../assets/images/portfolio/portfolio-5.jpg'
    },
    {
        id: 6,
        image: '../../../assets/images/portfolio/portfolio-6.jpg'
    },
  ]
}
