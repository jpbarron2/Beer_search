import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BeerComponent } from "./pages/beer/beer.component";
import { BreweryComponent } from "./pages/brewery/brewery.component";
import { MainComponent } from "./pages/main/main.component";
import { StyleComponent } from './pages/style/style.component';


const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "beer/:id", component: BeerComponent },
  { path: "brewery/:id", component: BreweryComponent },
  { path: "style/:id", component: StyleComponent },
  { path: "**", component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
