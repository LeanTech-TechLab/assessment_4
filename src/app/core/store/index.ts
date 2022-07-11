import {ActionReducerMap} from "@ngrx/store";
import {AppState} from "@app-models/app.model";
import {residentialInformationReducer} from "@app-core/store/reducers/residentialInformation.reducer";
import {personalInformationReducer} from "@app-core/store/reducers/personalInformation.reducer";

export const reducers: ActionReducerMap<AppState> = {
  personalInformation: personalInformationReducer,
  residentialInformation: residentialInformationReducer
}
