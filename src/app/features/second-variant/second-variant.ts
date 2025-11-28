import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Service } from '../../core/service';
import { AsyncPipe } from '@angular/common';
import { Area } from '../../shared/area/area';

@Component({
  selector: 'app-second-variant',
  imports: [AsyncPipe, Area],
  templateUrl: './second-variant.html',
  styleUrl: './second-variant.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SecondVariant {
  protected readonly service = inject(Service);
}
