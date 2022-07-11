
export interface AppState {
  personalInformation: PersonalInformationModel;
  residentialInformation: ResidentialInformationModel;
}

export interface PersonalInformationModel {
  name: string;
  lastName: string;
  age: number;
  email: string;
  cellphone: string;
}

export interface ResidentialInformationModel {
  street: string;
  neighborhood: string;
  department: string;
  city: string;
}

