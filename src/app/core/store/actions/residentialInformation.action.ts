import {createAction, props} from "@ngrx/store";
import {ResidentialInformationModel} from "@app-models/app.model";


export const setResidentialInfo = createAction(
  '[Residential Information] Set residential information',
  props<{ residentialInformation: ResidentialInformationModel}>()
)
