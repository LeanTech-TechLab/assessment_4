import {PersonalInformationModel} from "@app-models/app.model";
import {Action, createReducer, on} from "@ngrx/store";
import {setPersonalInfo} from "@app-core/store/actions/personalInormation.action";


const initialState: PersonalInformationModel = {
  name: '',
  lastName: '',
  age: 0,
  email: '',
  cellphone: ''
}

const _personalInformationReducer = createReducer(initialState,
  on(setPersonalInfo, (state, {personalInformation}) => ({...state, ...personalInformation})))

export function personalInformationReducer(state: PersonalInformationModel, action: Action) {
  return _personalInformationReducer(state, action);
}
