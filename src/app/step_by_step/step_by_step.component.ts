import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-by-step',
  templateUrl: './step_by_step.component.html',
  styleUrls: ['./step_by_step.component.scss']
})
export class StepByStepComponent {

  constructor() { }

  // ngOnInit() {
  // }

  stepsFunction() {
    // Given 2 arrays, create a function that let's users know (true/false) whether these two arrays contain any common items
    // For Example:
    // const array1 = [1, 2, 3, 4, 5];
    // const array 2 = [9, 8, 7, 6];
    //  should return false.
    // -----------------
    // const array1 = [1, 2, 3, 4, 5];
    // const array 2 = [9, 8, 7, 6, 5 ];
    //  should return true.

    // 2 parameters - arrays - no size limit
    // return true or false

    //  ## can brute force 2 for loops (nested for loops)
    // O(n^2)

    //     const array1 = ['a', 'b', 'c', 'x'];
    //     const array2 = ['z', 'y', 'a'];

    //     const containsCommonItem = (arr1, arr2) => {
    //   for (let i = 0; i < arr1.length; i++) {
    //     for (let j = 0; j < arr2.length; j++) {
    //       if (arr1[i] === arr2[j]) {
    //         console.log('True statement');
    //         return true;
    //       }
    //     }
    //   }
    //   console.log('False statement');
    //   return false;
    // };
    // O(a * b)
    //     containsCommonItem(array1, array2);

        const array1 = ['a', 'b', 'c', 'x'];
        const array2 = ['z', 'y', 'a'];

    // array ==> obj {
      // a: true,
      // b: true,
      // c: true,
      // x: true,
      // }
      // array2[index] === obj.properties

        const containsCommonItem2 = (arr1, arr2) => {
      //  loop through first array and create object where properties === items in the array
      // loop through second array and check if item in second array exists on created object.

      // O(a + b)
      };
    }
  }

