import { Component } from "@angular/core";

@Component({
  selector: "app-pricing",
  templateUrl: "./pricing.component.html",
  styleUrls: ["./pricing.component.scss"],
})
export class PricingComponent {
  pricingList = [
    {
      id: 1,
      price: 0,
      title: "Free Plan",
      feature1: "150 Lorem",
      feature2: "20 Lorem Ipsum",
      feature3: "Lorem Ipsum Dolor Sit.",
      feature4: "Free Lorem Ipsum",
      feature5: "Added Lorem Ipsum",
    },
    {
      id: 2,
      price: 60,
      title: "Business Plan",
      feature1: "150 Lorem",
      feature2: "20 Lorem Ipsum",
      feature3: "Lorem Ipsum Dolor Sit.",
      feature4: "Free Lorem Ipsum",
      feature5: "Added Lorem Ipsum",
    },
    {
      id: 3,
      price: 96,
      title: "Enterprise Plan",
      feature1: "150 Lorem",
      feature2: "20 Lorem Ipsum",
      feature3: "Lorem Ipsum Dolor Sit.",
      feature4: "Free Lorem Ipsum",
      feature5: "Added Lorem Ipsum",
    },
  ];
}
