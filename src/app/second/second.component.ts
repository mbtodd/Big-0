import { Component, OnInit } from '@angular/core';
import { BigOService } from './../big-o.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(
    private bigOService: BigOService
  ) { }

  ngOnInit() {
  }

  firstComponentFunction() {
    this.bigOService.onFirstComponentButtonClick();
  }
}
