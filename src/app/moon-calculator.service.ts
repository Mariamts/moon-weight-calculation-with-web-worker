import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoonCalculatorService {
  private moonCalculatorWorker: Worker;

  constructor() {
    this.moonCalculatorWorker = new Worker('./moon-calculator.worker', { type: 'module' });
  }

  calculateMoonWeight(userWeight: number): Promise<number> {
    return new Promise((resolve, reject) => {
      this.moonCalculatorWorker.onmessage = (event) => {
        resolve(event.data);
      };

      this.moonCalculatorWorker.onerror = (error) => {
        reject(error);
      };

      this.moonCalculatorWorker.postMessage(userWeight);
    });
  }
}
