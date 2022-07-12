import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonalInformationComponent} from "@app-modules/personal-information/personal-information.component";
import {PersonalInformationGuard} from "@app-core/guards/personal-information/personal-information.guard";

const routes: Routes = [
  {
    path: "",
    component: PersonalInformationComponent,
    canDeactivate: [PersonalInformationGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalInformationRoutingModule { }
