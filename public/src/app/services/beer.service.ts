import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { IBeer } from "../interfaces/beer";
import { IBrewery } from "../interfaces/brewery";
import { Beer } from "../classes/beer";
import { Brewery } from "../classes/brewery";

@Injectable({
  providedIn: "root"
})
export class BeerService {
  constructor(private _http: HttpClient) {
    this.getRandBeer();
  }
  getRandBrewery(id) {
    return this._http.get<IBrewery>(
      "https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/brewery/" +
        id +
        "/?key=8c4d49592f09400b16463266f6f5f7f5"
    );
  }
  getRandBeer() {
    return this._http.get<IBeer>(
      "https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beer/random/?withBreweries=Y&key=8c4d49592f09400b16463266f6f5f7f5"
    );
  }
  getBeerById(id) {
    return this._http.get(
      "https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beer/" +
        id +
        "/?withBreweries=Y&key=8c4d49592f09400b16463266f6f5f7f5"
    );
  }
}
