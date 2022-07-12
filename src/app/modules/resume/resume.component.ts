import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {getPersonalInformation} from "@app-core/store/selectors/personal-information.selector";
import {PersonalInformationModel, ResidentialInformationModel} from "@app-models/app.model";
import {getResidentialInformation} from "@app-core/store/selectors/residential-information.selector";
import {Router} from "@angular/router";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  personalInformationData: PersonalInformationModel;
  residentialInformationData: ResidentialInformationModel;
  constructor(private store: Store, private router: Router) {
    this.store.select(getPersonalInformation).subscribe(result => {
      this.personalInformationData = result;
    })
    this.store.select(getResidentialInformation).subscribe(result => {
      this.residentialInformationData = result;
    })
  }

  ngOnInit(): void {
  }

  editForms(url: string) {
    this.router.navigateByUrl(url);
  }
}
