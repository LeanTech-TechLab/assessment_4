import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResidentialInformationComponent} from "@app-modules/residential-information/residential-information.component";

const routes: Routes = [
  {
    path: "",
    component: ResidentialInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentialInformationRoutingModule { }
