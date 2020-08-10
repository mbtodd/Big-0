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
    // const everyone = ['dory', 'bruce', 'marlin', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank', 'nemo'];
    // const large = new Array(10).fill('nemo');

    // const findNemo = (array) => {
    //   const t0 = performance.now();
    //   for (const iterator in everyone) {
    //     console.log('running');
    //     if (array[iterator] === 'nemo') {
    //       console.log('FOUND NEMO');
    //       break;
    //     }
    //   }
    //   const t1 = performance.now();
    //   console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds');
    // };
    // findNemo(everyone); // O(n) -->Linear Time

    /* ===================================================================== */

    let printAllNumbersThenAllPairsSums = (numbers) => {

      console.log('these are the numbers:');
      numbers.forEach(number => {
        console.log(number);

      });
      console.log('and these are their sums: ')
      numbers.forEach(firstNumber => {
        numbers.forEach(secondNumber => {
          console.log(firstNumber + secondNumber);
        });
      });
    };

    printAllNumbersThenAllPairsSums([1, 2, 3, 4, 5]);
    // O()
    /* ===================================================================== */
    // const boxes = [0, 1, 2, 3, 4, 5];

    // let logFirstTwoBoxes = (boxes) => {
    //   console.log(boxes[0]);
    //   console.log(boxes[1]);
    // };

    // logFirstTwoBoxes(boxes);
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


  /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
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

  /* ----------------------------------------------------------------------------------------------------- */
  // What is the Big O of the below function? (Hint, you may want to go line by line)
  // let funChallenge = (input) => {
  //   let a = 10; // O(1)
  //   a = 50 + 3; // O(1)

  //   for (let i = 0; i < input.length; i++) { // O(n)
  //     anotherFunction(); // O(n)
  //     let stranger = true; // O(n)
  //     a++; // O(n)

  //   }
  //   return a; // O(1)
  // };
  //  3 + n + n + n + n

  //  BIG O(3 + 4n)

  /* ----------------------------------------------------------------------------------------------------- */

  // What is the Big O of the below function? (Hint, you may want to go line by line)
  // function anotherFunChallenge(input) {
  //   let a = 5; // O(1)
  //   let b = 10; // O(1)
  //   let c = 50; // O(1)
  //   for (let i = 0; i < input; i++) { // O(n)
  //     let x = i + 1; // O(n)
  //     let y = i + 2; // O(n)
  //     let z = i + 3; // O(n)

  //   }
  //   for (let j = 0; j < input; j++) { // O(n)
  //     let p = j * 2; // O(n)
  //     let q = j * 2; // O(n)
  //   }
  //   let whoAmI = "I don't know"; // O(1)
  // }


  //  4 + n + n + n + n
  //  BIG O(4 + 7n)


  /* ===================================================================== */

  // log all pairs of array
  // const boxes = ['a', 'b', 'c', 'd', 'e'];

  // let logAllPairsOfArray = (array) => {
  //   for (let i = 0; i < array.length; i++) {
  //     for (let j = 0; j < array.length; j++) {
  //       // console.log(i, j);
  //       console.log(array[i], array[j]);
  //     }
  //   }
  // };

  // logAllPairsOfArray(boxes); // O(n^2)

  /* ===================================================================== */



}
