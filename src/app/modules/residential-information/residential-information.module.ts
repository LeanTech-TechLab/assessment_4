import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentialInformationRoutingModule } from './residential-information-routing.module';
import { ResidentialInformationComponent } from './residential-information.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    ResidentialInformationComponent
  ],
  imports: [
    CommonModule,
    ResidentialInformationRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ResidentialInformationModule { }
