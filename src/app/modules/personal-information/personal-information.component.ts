import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {setPersonalInfo} from "@app-core/store/actions/personalInormation.action";
import {Router} from "@angular/router";

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  personalInformationForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store, private router: Router) {
    this.personalInformationForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required],
      cellphone: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  savePersonalInformation() {
    console.log('console', this.personalInformationForm.value);
    this.store.dispatch(setPersonalInfo({personalInformation: this.personalInformationForm.value}));
    this.router.navigateByUrl('/residential-information');
  }

}
