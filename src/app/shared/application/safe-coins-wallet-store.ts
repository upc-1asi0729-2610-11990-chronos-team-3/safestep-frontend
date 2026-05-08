import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SafeCoinsWalletStore {
  readonly balance = signal(0);

  setBalance(balance: number): void {
    this.balance.set(balance);
  }
}
