import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PersonalInformationModel} from "@app-models/app.model";


const personalInformationSelector = createFeatureSelector<PersonalInformationModel>('personalInformation');

export const getPersonalInformation = createSelector(personalInformationSelector, (state:PersonalInformationModel) => state);

