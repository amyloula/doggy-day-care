import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"]
})
export class ProfilePage implements OnInit {
  dogs: Array<{}> = [
    {
      name: "dog1",
      id: 1
    },
    {
      name: "dog2",
      id: 2
    },
    {
      name: "dog3",
      id: 3
    }
  ];
  owner = {
    name: 'owner',
    id: 1
  }
  constructor() {}

  ngOnInit() {}
}
