import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BeerService } from "./services/beer.service";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainComponent } from './pages/main/main.component';
import { BreweryComponent } from './pages/brewery/brewery.component';
import { BeerComponent } from './pages/beer/beer.component';
import { StyleComponent } from './pages/style/style.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, MainComponent, BreweryComponent, BeerComponent, StyleComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
