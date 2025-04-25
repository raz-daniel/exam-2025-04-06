import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AccountOperationsService } from '../../services/accountOperations.service';
import { OperationType } from '../../enum/OperationType.enum';
import { Draft } from '../../models/accountOperations/draft.model';


@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {

  types: string[] = [];
  
  newForm = new FormGroup({
    accountNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    type: new FormControl('', [
      Validators.required
    ]),
    metadata: new FormGroup({
      amount: new FormControl(0, [
        Validators.required,
        Validators.min(0)
      ]),
      date: new FormControl(new Date(), [
        Validators.required
      ]),
      payment: new FormControl(null),
      interest: new FormControl(null)
    })
  });

  constructor(
    public accountOperationService: AccountOperationsService,
    public router: Router
  ) { }

  async ngOnInit() {
    try {
      this.types = await this.accountOperationService.getOperationTypes();
      
      // Add max date validation
      const today = new Date();
      const metadataGroup = this.newForm.get('metadata') as FormGroup;
      metadataGroup.get('date')?.addValidators([
        (control) => {
          const selectedDate = new Date(control.value);
          return selectedDate > today ? { futureDate: true } : null;
        }
      ]);
      
      // Add change listener for type
      this.newForm.get('type')?.valueChanges.subscribe(type => {
        this.updateValidators(type as OperationType);
      });
      
    } catch (e) {
      console.error('Failed to load operation types', e);
    }
  }
  
  // Update validators based on operation type
  updateValidators(type: OperationType) {
    const metadataGroup = this.newForm.get('metadata') as FormGroup;
    const paymentControl = metadataGroup.get('payment');
    const interestControl = metadataGroup.get('interest');
    
    if (type === OperationType.LOAN) {
      paymentControl?.setValidators([Validators.required, Validators.min(1)]);
      interestControl?.setValidators([Validators.required, Validators.min(0)]);
    } else {
      paymentControl?.clearValidators();
      interestControl?.clearValidators();
    }
    
    paymentControl?.updateValueAndValidity();
    interestControl?.updateValueAndValidity();
  }
  
  async addOperation() {
    if (this.newForm.invalid) return;
    
    try {
      const formValue = this.newForm.value as Draft;
      await this.accountOperationService.addOperation(formValue);
      this.router.navigate(['/account-operations']);
    } catch (e) {
      alert(e);
    }
  }
  
  // Helper methods for template
  get isLoanSelected(): boolean {
    return this.newForm.get('type')?.value === OperationType.LOAN;
  }
}