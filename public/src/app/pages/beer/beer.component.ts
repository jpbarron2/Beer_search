import { Component, OnInit, OnDestroy } from "@angular/core";
import { BeerService } from "../../services/beer.service";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { IBeer } from "../../interfaces/beer";
import { Location } from "@angular/common";
import { Beer } from "../../classes/beer";
import { Subscription } from "rxjs";

@Component({
  selector: "app-beer",
  templateUrl: "./beer.component.html",
  styleUrls: ["./beer.component.scss"]
})
export class BeerComponent implements OnInit, OnDestroy {
  public beer: Beer;
  private subscriptions: Subscription[] = [];
  constructor(
    private _beerService: BeerService,
    private _route: ActivatedRoute,
    private _router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getBeerFromParams(params["id"]);
    });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  back() {
    this.location.back();
  }
  getBeerFromParams(id): Beer {
    this._beerService.getBeerById(id).subscribe((data: IBeer) => {
      this.beer = { ...data["data"] };
      console.log(this.beer);
    });
    return this.beer;
  }
}
