import {Component, OnInit} from '@angular/core';
import {TestService} from '../../services/test.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  fruit: string;
  vehicle: string;
  car: string;

  constructor(private test: TestService) {
  }

  ngOnInit(): void {
  }

  addFruit(): void {
    this.test.addFruit(this.fruit);
    this.fruit = null;
  }

  addVehicle(): void{
    this.test.addVehicle(this.vehicle);
    this.vehicle = null;
  }

  addCar(): void {
    this.test.addCars(this.car);
  }
}
