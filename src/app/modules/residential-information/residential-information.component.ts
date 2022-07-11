import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {setResidentialInfo} from "@app-core/store/actions/residentialInformation.action";
import {Router} from "@angular/router";

@Component({
  selector: 'app-residential-information',
  templateUrl: './residential-information.component.html',
  styleUrls: ['./residential-information.component.scss']
})
export class ResidentialInformationComponent implements OnInit {

  residentialInformationForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store, private router: Router) {
    this.residentialInformationForm = this.fb.group({
      street: ['', Validators.required],
      neighborhood: ['', Validators.required],
      department: ['', Validators.required],
      city: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  saveResidentialInformation() {
    this.store.dispatch(setResidentialInfo({residentialInformation: this.residentialInformationForm.value}));
    this.router.navigateByUrl('/resume');
  }
}
