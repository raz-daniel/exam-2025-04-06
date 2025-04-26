import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountOperations } from '../../../models/accountOperations/accountOperations.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() operation!: AccountOperations;
  @Input() isHighlighted: boolean = false;
}