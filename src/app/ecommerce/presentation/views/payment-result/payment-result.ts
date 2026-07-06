import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-payment-result',
  imports: [RouterLink, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './payment-result.html',
  styleUrl: './payment-result.css',
})
export class PaymentResult {
  private readonly route = inject(ActivatedRoute);
  protected readonly status = computed(() => this.route.snapshot.data['status'] as 'success' | 'cancel');
  protected readonly isSuccess = computed(() => this.status() === 'success');
}

