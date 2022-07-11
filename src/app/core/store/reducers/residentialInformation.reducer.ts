import {ResidentialInformationModel} from "@app-models/app.model";
import {Action, createReducer, on} from "@ngrx/store";
import {setResidentialInfo} from "@app-core/store/actions/residentialInformation.action";

const initialState: ResidentialInformationModel = {
  street: '',
  neighborhood: '',
  department: '',
  city: ''
}

export const _residentialInformationReducer = createReducer(initialState,
  on(setResidentialInfo, (state, {residentialInformation})=> ({...state, ...residentialInformation})))

export function residentialInformationReducer(state: ResidentialInformationModel, action: Action) {
  return _residentialInformationReducer(state, action);
}
