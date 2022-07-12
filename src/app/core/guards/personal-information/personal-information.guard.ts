import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {PersonalInformationDeactivate} from "@app-models/personal-information-deactivate";

@Injectable({
  providedIn: 'root'
})
export class PersonalInformationGuard implements CanDeactivate<PersonalInformationDeactivate> {
  component: Object;
  canDeactivate(component: PersonalInformationDeactivate): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canExit ? component.canExit(): true;
  }

}
