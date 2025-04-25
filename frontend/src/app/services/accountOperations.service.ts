import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { Draft } from '../models/accountOperations/draft.model';
import { AccountOperations } from '../models/accountOperations/accountOperations.model';


@Injectable({
  providedIn: 'root'
})
export class AccountOperationsService {

  constructor(public httpClient: HttpClient) { }

    async getOperationsByAccount(accountNumber: string): Promise<AccountOperations[]> {
      const observable = this.httpClient.get<AccountOperations[]>(`${environment.restServerUrl}/account-operations/${accountNumber}`)
      const operations = firstValueFrom(observable)
      return operations
    }

    async getOperationTypes(): Promise<string[]> {
      const observable = this.httpClient.get<string[]>(`${environment.restServerUrl}/account-operations/type`)
      const types = firstValueFrom(observable)
      return types
    }

    async addOperation(draft: Draft): Promise<AccountOperations> {
        const observable = this.httpClient.post<AccountOperations>(`${environment.restServerUrl}/account-operations`, draft)
        const newOperation = firstValueFrom(observable)
        return newOperation
      }

}