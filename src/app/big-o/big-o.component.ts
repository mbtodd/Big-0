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

    function findNemo0(array) {
      let t0 = performance.now();
      for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
          console.log('Found Nemo0!');
        }
      }
      let t1 = performance.now();
      console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds');
    }

    const findNemo = (array) => {
      let t0 = performance.now();
      // tslint:disable-next-line: forin
      for (const iterator in array) {
        console.log(array.length);
        if (array[iterator] === 'nemo') {
          console.log('FOUND NEMO');
          // alert('FOUND NEMO ALERT');
          break;
        }
      }
      let t1 = performance.now();
      console.log('Call to find Nemo took ' + (t1-t0) + ' milliseconds');
    };


    const findNemo2 = (array) => {
      let t0 = performance.now();
      array.forEach(fish => {
        if (fish === 'nemo') {
          console.log('Found NEMO2!');
        }
      });
      let t1 = performance.now();
      console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds');
    };


    const findNemo3 = (array) => {
      let t0 = performance.now();
      for (const fish of array) {
        if (fish === 'nemo') {
          console.log('Found NEMO3!');
        }
      }
      let t1 = performance.now();
      console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds');
    };

    findNemo0(everyone);
    findNemo(everyone);
    findNemo2(everyone);
    findNemo3(everyone);

    // const booooooooo = (n) => {
    //   for (const iterator of n) {
    //     console.log('booooooo');
    //   }
    //   // for (let i = 0; i < n.length; i++) {
    //   //   console.log('booooooo');

    //   // }
    // };

    // booooooooo([1, 2, 3, 4, 5]); //O(1)


  }


}
