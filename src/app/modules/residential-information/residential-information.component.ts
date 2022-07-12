import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {setResidentialInfo} from "@app-core/store/actions/residentialInformation.action";
import {Router} from "@angular/router";
import {getResidentialInformation} from "@app-core/store/selectors/residential-information.selector";
import {ResidentialInformationModel} from "@app-models/app.model";

@Component({
  selector: 'app-residential-information',
  templateUrl: './residential-information.component.html',
  styleUrls: ['./residential-information.component.scss']
})
export class ResidentialInformationComponent implements OnInit {

  residentialInformationForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store, private router: Router) {
    this.store.select(getResidentialInformation).subscribe( result => {
      this.initForm(result);
    })
  }

  initForm(formData: ResidentialInformationModel) {
    this.residentialInformationForm = this.fb.group({
      street: [formData.street, Validators.required],
      neighborhood: [formData.neighborhood, Validators.required],
      department: [formData.department, Validators.required],
      city: [formData.city, Validators.required]
    })
  }

  ngOnInit(): void {
  }

  saveResidentialInformation() {
    this.store.dispatch(setResidentialInfo({residentialInformation: this.residentialInformationForm.value}));
    this.router.navigateByUrl('/resume');
  }
}
