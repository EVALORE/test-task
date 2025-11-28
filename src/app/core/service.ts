import { inject, Injectable } from '@angular/core';
import { Api } from './api';
import { forkJoin, map, shareReplay } from 'rxjs';
import { AreaWithThings, Thing } from './models';

@Injectable({
  providedIn: 'root',
})
export class Service {
  private readonly api = inject(Api);

  public readonly data = forkJoin([this.api.getAreas(), this.api.getThings()]).pipe(
    map(([areas, things]): AreaWithThings[] => {
      const groupsByArea = this.groupThingsByArea(things);
      const areasWithThings = areas.map((area) => ({
        area,
        thingGroups: groupsByArea.get(area.areaId) ?? [],
      }));

      return this.sortAreas(areasWithThings);
    }),
    shareReplay(1),
  );

  private groupThingsByArea(things: Thing[]): Map<number, Thing[][]> {
    const parents = things.filter((t) => t.joinedWith === null);
    const groupsByArea = new Map<number, Thing[][]>();

    for (const parent of parents) {
      const children = things.filter((t) => t.joinedWith === parent.id);
      const group = [parent, ...children];

      const areaGroups = groupsByArea.get(parent.areaId) ?? [];
      groupsByArea.set(parent.areaId, [...areaGroups, group]);
    }

    for (const groups of groupsByArea.values()) {
      groups.sort((a, b) => b.length - a.length);
    }

    return groupsByArea;
  }

  private sortAreas(areas: AreaWithThings[]): AreaWithThings[] {
    const [withMultiple, others] = this.partition(areas, (a) => a.thingGroups.length > 1);

    withMultiple.sort((a, b) => b.thingGroups.length - a.thingGroups.length);

    return [...withMultiple, ...others];
  }

  private partition<T>(array: T[], predicate: (item: T) => boolean): [T[], T[]] {
    const truthy: T[] = [];
    const falsy: T[] = [];

    for (const item of array) {
      if (predicate(item)) {
        truthy.push(item);
      } else {
        falsy.push(item);
      }
    }

    return [truthy, falsy];
  }
}
