import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appName = 'Metric Converter';
  authorName = 'Nathasya Mongkau';

  selectedMetric: string = '';
  selectedUnitFrom: string = '';
  selectedUnitTo: string = '';
  inputValue: number | null = null;
  resultValue: number | null = null;

  metrics = ['Length', 'Mass', 'Temperature'];
  units: { [metric: string]: string[] } = {
    Length: ['Meters', 'Centimeters', 'Kilometers'],
    Mass: ['Grams', 'Kilograms', 'Milligrams'],
    Temperature: ['Celsius', 'Fahrenheit', 'Kelvin'],
  };

  onMetricChange(event: any) {
    this.selectedMetric = event.detail.value;
    this.selectedUnitFrom = '';
    this.selectedUnitTo = '';
    this.inputValue = null;
    this.resultValue = null;
  }

  onUnitFromChange(event: any) {
    this.selectedUnitFrom = event.detail.value;
  }

  onUnitToChange(event: any) {
    this.selectedUnitTo = event.detail.value;
  }

  convert() {
    if (isNaN(this.inputValue as number)) {
      console.log('Input is not a valid number.');
      return;
    }

    if (this.selectedMetric === 'Length') {
      this.performPanjangConversion();
    } else if (this.selectedMetric === 'Mass') {
      this.performMassaConversion();
    } else if (this.selectedMetric === 'Temperature') {
      this.performSuhuConversion();
    }
  }

  performPanjangConversion() {
    const units: { [unit: string]: number } = {
      Meters: 1,
      Centimeters: 100,
      Kilometers: 0.001,
    };

    const conversionFactor =
      units[this.selectedUnitTo] / units[this.selectedUnitFrom];
    this.resultValue = (this.inputValue as number) * conversionFactor;
  }

  performMassaConversion() {
    const units: { [unit: string]: number } = {
      Grams: 1,
      Kilograms: 0.001,
      Milligrams: 1000,
    };

    const conversionFactor =
      units[this.selectedUnitTo] / units[this.selectedUnitFrom];
    this.resultValue = (this.inputValue as number) * conversionFactor;
  }

  performSuhuConversion() {
    const units: { [unit: string]: number } = {
      Celsius: 1,
      Fahrenheit: 33.8,
      Kelvin: 274.15,
    };

    const conversionFactor =
      units[this.selectedUnitTo] / units[this.selectedUnitFrom];
    this.resultValue = (this.inputValue as number) * conversionFactor;
  }
}
