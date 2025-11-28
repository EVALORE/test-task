export interface Area {
  areaId: number;
  name: string;
}

export interface Thing {
  id: number;
  areaId: number;
  joinedWith: number | null;
  sku: string;
  defaultSku: string;
  status: 'close' | 'open';
  countActive: number;
}

export interface AreaWithThings {
  area: Area;
  thingGroups: Thing[][];
}
