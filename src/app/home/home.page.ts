import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  testimonials: Array<Testimonial> = [
    {
      name: "test",
      content:
        "Lorem ipsum dolor sit amet, duo at possim timeam placerat. Usu omnis iisque adolescens eu, cu tantas lobortis sed, utinam animal at nam. His exerci.",
      picture: "string"
    },
    {
      name: "test",
      content:
        "Lorem ipsum dolor sit amet, duo at possim timeam placerat. Usu omnis iisque adolescens eu, cu tantas lobortis sed, utinam animal at nam. His exerci.",
      picture: "string"
    },
    {
      name: "test",
      content:
        "Lorem ipsum dolor sit amet, duo at possim timeam placerat. Usu omnis iisque adolescens eu, cu tantas lobortis sed, utinam animal at nam. His exerci.",
      picture: "string"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
