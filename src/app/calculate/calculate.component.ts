import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss']
})
export class CalculateComponent implements OnInit {

  qty = 0;
  cost = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
