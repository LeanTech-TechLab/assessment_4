import {createAction, props} from "@ngrx/store";
import {PersonalInformationModel} from "@app-models/app.model";


export const setPersonalInfo = createAction(
  '[Personal Information] Set personal information',
  props<{ personalInformation: PersonalInformationModel}>()
)
