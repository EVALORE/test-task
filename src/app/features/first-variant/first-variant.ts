import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { Service } from '../../core/service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AreaWithThings } from '../../core/models';
import { Area } from '../../shared/area/area';

@Component({
  selector: 'app-first-variant',
  imports: [Area],
  templateUrl: './first-variant.html',
  styleUrl: './first-variant.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstVariant {
  private readonly service = inject(Service);
  private readonly destroyRef = inject(DestroyRef);
  private readonly cdr = inject(ChangeDetectorRef);

  protected result: AreaWithThings[] = [];

  constructor() {
    this.service.data.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
      this.result = data;
      this.cdr.markForCheck();
    });
  }
}
