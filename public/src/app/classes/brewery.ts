import { IBrewery } from "../interfaces/brewery";
import { IBeer } from "../interfaces/beer";

export class Brewery {
  id: string;
  name: string;
  nameShortDisplay: string;
  status: string;
  isInBusiness: string;
  beers: IBeer[];
  constructor({ id, name, nameShortDisplay, status, isInBusiness, beers }) {
    this.id = id;
    this.name = name;
    this.nameShortDisplay = nameShortDisplay;
    this.status = status;
    this.isInBusiness = isInBusiness;
    this.beers = beers;
  }
}
