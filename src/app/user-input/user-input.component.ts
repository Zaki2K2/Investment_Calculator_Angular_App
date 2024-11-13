import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']  // corrected to 'styleUrls'
})
export class UserInputComponent {

  @Output() calculate = new EventEmitter<InvestmentInput>();
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: Number(this.enteredInitialInvestment),
      duration: Number(this.enteredDuration),
      expectedReturn: Number(this.enteredExpectedReturn),
      annualInvestment: Number(this.enteredAnnualInvestment)
    });
  }
}
