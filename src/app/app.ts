import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { FirstVariant } from './features/first-variant/first-variant';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstVariant],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
