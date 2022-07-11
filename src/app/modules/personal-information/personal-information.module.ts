import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonalInformationRoutingModule} from "@app-modules/personal-information/personal-information-routing.module";
import { PersonalInformationComponent } from './personal-information.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    PersonalInformationComponent
  ],
  imports: [
    CommonModule,
    PersonalInformationRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class PersonalInformationModule { }
