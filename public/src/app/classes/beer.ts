import { IBeer } from "../interfaces/beer";

export class Beer {
  id: string;
  name: string;
  nameDisplay: string;
  abv: number;
  ibu: number;
  labels: {
    icon: string;
    medium: string;
    large: string;
    contentAwareIcon: string;
    contentAwareMedium: string;
    contentAwareLarge: string;
  };
  available: {
    id: number;
    name: string;
    description: string;
  };
  styleId: number;
  isRetired: string;
  status: string;
  style: {
    id: number;
    categoryId: number;
    category: {
      id: number;
      name: string;
    };
    name: string;
    shortName: string;
    description: string;
    ibuMin: number;
    ibuMax: number;
    abvMin: number;
    abvMax: number;
    srmMin: number;
    srmMax: number;
    fgMin: number;
    fgMax: number;
  };
  constructor({
    id,
    name,
    nameDisplay,
    abv,
    ibu,
    labels,
    available,
    styleId,
    isRetired,
    status,
    style
  }) {
    (this.id = id),
      (this.name = name),
      (this.nameDisplay = nameDisplay),
      (this.abv = abv),
      (this.ibu = ibu),
      (this.labels = labels),
      (this.available = available),
      (this.styleId = styleId),
      (this.isRetired = isRetired),
      (this.status = status),
      (this.style = style);
  }
}
