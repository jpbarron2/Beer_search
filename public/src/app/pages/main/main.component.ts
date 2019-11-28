import { Component, OnInit } from "@angular/core";
import { BeerService } from "../../services/beer.service";
import { Beer } from "../../classes/beer";
import { IBrewery } from "../../interfaces/brewery";
import { IBeer } from "../../interfaces/beer";
import { Brewery } from "../../classes/brewery";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  randBeer: Beer;
  randBrew: Brewery;
  constructor(private _beerService: BeerService) {}
  ngOnInit(): void {
    this.getRandBeerFromService();
  }
  
  getRandBreweryFromService(id): Brewery {
    this._beerService
      .getRandBrewery(id)
      .subscribe((data: IBrewery) => (this.randBrew = { ...data["data"] }));
    return this.randBrew;
  }
  getRandBeerFromService(): Beer {
    this._beerService.getRandBeer().subscribe((data: IBeer) => {
      let brewId = data["data"]["breweries"][0]["id"];
      this.getRandBreweryFromService(brewId);
      this.randBeer = { ...data["data"] };
    });
    return this.randBeer;
  }
}
