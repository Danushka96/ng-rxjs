import {Component, OnInit} from '@angular/core';
import {TestService} from '../../services/test.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  public fruits: Array<string> = [];
  private fruitsSubscriber: Subscription;
  public vehicles: Array<string> = [];
  private vehiclesSubscriber: Subscription;
  public cars: Array<string> = [];
  private carsSubscriber: Subscription;

  constructor(private testService: TestService) {
  }

  ngOnInit(): void {
    this.testService.getVal().subscribe(data => {
      console.log(data);
    });
  }

  unsubscribeFruit(): void {
    console.log('unsubscribed from fruits subject');
    this.fruitsSubscriber.unsubscribe();
  }

  subscribeFruit(): void {
    console.log('subscribed to fruits subject');
    this.fruitsSubscriber = this.testService.getFruits().subscribe(fruits => {
      this.fruits.push(fruits);
    });
  }

  subscribeVehicle(): void {
    console.log('subscribed to vehicle BehaviourSubject');
    this.vehiclesSubscriber = this.testService.getVehicles().subscribe(vehicle => {
      this.vehicles.push(vehicle);
    });
  }

  unsubscribeVehicle(): void {
    console.log('unsubscribed from vehicle behaviour subject');
    this.vehiclesSubscriber.unsubscribe();
  }

  subscribeCars(): void {
    console.log('subscribed to vehicle BehaviourSubject');
    this.carsSubscriber = this.testService.getCars().subscribe(car => {
      this.cars.push(car);
    });
  }

  unsubscribeCars(): void {
    console.log('unsubscribed from cars replay subject');
    this.carsSubscriber.unsubscribe();
  }
}
