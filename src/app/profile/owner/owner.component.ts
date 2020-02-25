import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss'],
})
export class OwnerComponent implements OnInit {
  @Input() user;

  constructor() { }

  ngOnInit() {}

}
