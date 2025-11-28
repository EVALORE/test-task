import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AreaWithThings } from '../../core/models';
import { Card } from '../card/card';

@Component({
  selector: 'app-area',
  imports: [Card],
  templateUrl: './area.html',
  styleUrl: './area.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Area {
  public readonly item = input.required<AreaWithThings>();
}
