import { IBeer } from "./beer";

export interface IBrewery {
  id: string;
  name: string;
  nameShortDisplay: string;
  status: string;
  isInBusiness: string;
  beers: IBeer[];
}
