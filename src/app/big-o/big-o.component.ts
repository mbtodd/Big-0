import { BigOService } from './../big-o.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-o',
  templateUrl: './big-o.component.html',
  styleUrls: ['./big-o.component.scss']
})
export class BigOComponent implements OnInit {

  constructor() {
    }

  ngOnInit() {
  }

  // FirstComponentFunction() {
  //   this.bigOService.onFirstComponentButtonClick();
  // }

  bigOFunction() {
    const nemo = ['nemo'];
    const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank' ];
    const large = new Array(100).fill('nemo');

    const findNemo = (array) => {
      let t0 = performance.now();
      for (const iterator in large) {
        if (array[iterator] === 'nemo') {
          console.log('FOUND NEMO');
          // alert('FOUND NEMO');
        }
      }
      let t1 = performance.now();
      console.log('Call to find Nemo took ' + (t1-t0) + ' milliseconds');
    };
    findNemo(large);
  }
}
