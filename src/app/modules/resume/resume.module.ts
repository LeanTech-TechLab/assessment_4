import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './resume.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ResumeComponent
  ],
    imports: [
        CommonModule,
        ResumeRoutingModule,
        MatButtonModule
    ]
})
export class ResumeModule { }
