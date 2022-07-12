import {Observable} from "rxjs";

export interface PersonalInformationDeactivate {
  canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}
