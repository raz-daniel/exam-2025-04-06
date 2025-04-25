import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccountOperations } from '../../models/accountOperations/accountOperations.model';
import { AccountOperationsService } from '../../services/accountOperations.service';


@Component({
  selector: 'app-account-operations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './account-operations.component.html',
  styleUrl: './account-operations.component.css'
})
export class AccountOperationsComponent {
  operations = signal<AccountOperations[]>([]);
  newOperationId: string | null = null;
  accountNumber = signal<string>('');

  constructor(
    public accountOperationService: AccountOperationsService,
  ) { }

  addOperation(accountOperation: AccountOperations) {
    this.operations.set([accountOperation, ...this.operations()]);
    this.newOperationId = accountOperation.id;

    setTimeout(() => {
      this.newOperationId = null;
    }, 3000);
  }

  async operationsByAccount(event: Event) {
    try {
      const inputElement = event.target as HTMLInputElement;
      const inputAccount = inputElement.value;
      
      if (inputAccount && inputAccount.trim() !== '') {
        const operations = await this.accountOperationService.getOperationsByAccount(inputAccount);
        this.operations.set(operations);
        this.accountNumber.set(inputAccount);
      } else {
        // show nothing when input is empty
        this.operations.set([]);
        this.accountNumber.set('');
      }
    } catch (e) {
      console.error('Error filtering operations by account:', e);
      alert('Failed to load operations for the selected account');
      this.operations.set([]);
    }
  }
}