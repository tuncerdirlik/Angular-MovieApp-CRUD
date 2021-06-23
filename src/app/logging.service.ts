import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  messsages: string[] = [];

  constructor() { }

  add(message: string): void {
    this.messsages.push(message);
  }

  clear(): void {
    this.messsages = [];
  }

}
