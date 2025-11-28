import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Area, Thing } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private readonly http = inject(HttpClient);

  public getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>('areas.json');
  }

  public getThings(): Observable<Thing[]> {
    return this.http.get<Thing[]>('things.json');
  }
}
