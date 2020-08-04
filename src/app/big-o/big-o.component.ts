import { BigOService } from './../big-o.service';
import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
// import * fs alias from 'fs';

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
    // const nemo = ['nemo'];
    // const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
    // const large = new Array(10).fill('nemo');

    // const findNemo = (array) => {
    //   let t0 = performance.now();
    //   for (const iterator in large) {
    //     if (array[iterator] === 'nemo') {
    //       console.log('FOUND NEMO');
    //       // alert('FOUND NEMO');
    //     }
    //   }
    //   let t1 = performance.now();
    //   console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds');
    // };
    // findNemo(large); //O(n) -->Linear Time
    /* ===================================================================== */
    const boxes = [0, 1, 2, 3, 4, 5];

    let logFirstTwoBoxes = (boxes) => {
      console.log(boxes[0]);
      console.log(boxes[1]);
    };

    logFirstTwoBoxes(boxes);
    /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


    // let s: string = faker.name.jobTitle();
    // alert(s);


    /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


    // let firstName: string = faker.name.firstName();
    // let lastName: string = faker.name.lastName();

    // let jobTitle: string = faker.name.jobTitle();
    // let prefix: string = faker.name.prefix();
    // let suffix: string = faker.name.suffix();
    // let jobArea: string = faker.name.jobArea();

    // let phone: string = faker.phone.phoneNumber();
    // tslint:disable-next-line: no-trailing-whitespace

    // alert(`Employee: ${prefix} ${firstName} ${lastName} ${suffix}`);
    // alert(`Job title: ${jobTitle}`);
    // alert(`Job area: ${jobArea}`);
    // alert(`Phone: ${phone}`);
  }

  // generateUsers() {
  //   let users: any = [];
  //   for (let id = 1; id <= 100; id++) {
  //     let firstName: string = faker.name.firstName();
  //     let lastName: string = faker.name.lastName();
  //     let email: string = faker.internet.email();

  //     users.push({
  //       'id': id,
  //       'first_name': firstName,
  //       'last_name': lastName,
  //       'email': email
  //     });
  //   }
  //   return { 'data': users }
  // }

  // let dataObj = generateUsers();
  // fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));


}
