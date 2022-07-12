import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ResidentialInformationModel} from "@app-models/app.model";


const residentialInformationSelector = createFeatureSelector<ResidentialInformationModel>('residentialInformation');

export const getResidentialInformation = createSelector(residentialInformationSelector, (state:ResidentialInformationModel )=> state);
