import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private simpleSubscriber = new Observable<string>(data => {
    data.next('val1');
    data.next('val2');
  });

  private fruitsSubject = new Subject<string>();
  private vehiclesBehaviourSubject = new BehaviorSubject(null);
  private carsReplaySubject = new ReplaySubject<string>(5);

  constructor() {
  }

  public getVal(): Observable<string>{
    return this.simpleSubscriber;
  }

  public addFruit(fruit: string): void{
    this.fruitsSubject.next(fruit);
  }

  public getFruits(): Subject<string>{
    return this.fruitsSubject;
  }

  public addVehicle(vehicle: string): void{
    this.vehiclesBehaviourSubject.next(vehicle);
  }

  public getVehicles(): BehaviorSubject<string> {
    return this.vehiclesBehaviourSubject;
  }

  public addCars(car: string): void{
    return this.carsReplaySubject.next(car);
  }

  public getCars(): ReplaySubject<string>{
    return this.carsReplaySubject;
  }
}
