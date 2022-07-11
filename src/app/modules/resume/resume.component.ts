import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {getPersonalInformation} from "@app-core/store/selectors/personal-information.selector";
import {PersonalInformationModel} from "@app-models/app.model";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  personalInformationData: PersonalInformationModel;
  constructor(private store: Store) {
    this.store.select(getPersonalInformation).subscribe(result => {
      console.log('personal information', result);
      this.personalInformationData = result;
    })
  }

  ngOnInit(): void {
  }

}
