import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Thing } from '../../core/models';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  public readonly isThirst = input.required<boolean>();
  public readonly thing = input.required<Thing>();
}
