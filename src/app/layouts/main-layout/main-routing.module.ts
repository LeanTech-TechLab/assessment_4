import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./main-layout.component";

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "dashboard",
      },
      {
        path: "personal-information",
        pathMatch: "full",
        loadChildren: () =>
          import("../../modules/personal-information/personal-information.module").then(
            (m) => m.PersonalInformationModule
          ),
      },
      {
        path: "residential-information",
        pathMatch: "full",
        loadChildren: () =>
          import("../../modules/residential-information/residential-information.module").then(
            (m) => m.ResidentialInformationModule
          ),
      },
      {
        path: "resume",
        pathMatch: "full",
        loadChildren: () =>
          import("../../modules/resume/resume.module").then(
            (m) => m.ResumeModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
