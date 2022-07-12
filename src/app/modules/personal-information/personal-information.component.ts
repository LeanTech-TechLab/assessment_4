import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {setPersonalInfo} from "@app-core/store/actions/personalInormation.action";
import {Router} from "@angular/router";
import {getPersonalInformation} from "@app-core/store/selectors/personal-information.selector";
import {PersonalInformationModel} from "@app-models/app.model";
import {PersonalInformationDeactivate} from "@app-models/personal-information-deactivate";

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit, PersonalInformationDeactivate {

  personalInformationForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store, private router: Router) {
    this.store.select(getPersonalInformation).subscribe( result => {
      this.initForm(result);
    })
  }

  initForm(formData: PersonalInformationModel) {
    this.personalInformationForm = this.fb.group({
      name: [formData.name, Validators.required],
      lastName: [formData.lastName, Validators.required],
      age: [formData.age, Validators.required],
      email: [formData.email, Validators.required],
      cellphone: [formData.cellphone, Validators.required],
    })
  }

  ngOnInit(): void {
  }

  savePersonalInformation() {
    this.store.dispatch(setPersonalInfo({personalInformation: this.personalInformationForm.value}));
    this.router.navigateByUrl('/residential-information');
  }

  public canExit(): boolean {
    if (this.personalInformationForm.valid){
      return true;
    }{
      alert('Por favor llenar todos los campos');
      return false;
    }
  }

}
