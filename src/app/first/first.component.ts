import { BigOService } from './../big-o.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(
    private bigOService: BigOService
  ) { }

  ngOnInit() {
    if (this.bigOService.subsVar === undefined) {
      this.bigOService.subsVar = this.bigOService.
        invokeFirstComponentFunction.subscribe((name: string) => {
          this.firstFunction();
          console.log(this.bigOService);
        });
    }
  }

  firstFunction() {
    alert('Hello ' + '\nWelcome to C# Corner \nFunction in First Component');
    
  }
}    