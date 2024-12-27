import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PetInformation {
    petName: string;
    petBreed: string;
    petGender: string;
    petAge: string;
}

interface PetDetails {
    petTypeBreed: string;
    dogSpayed: string;
    petRole: string;
}

interface PetInsuranceState {
    petInformation: PetInformation;
    petDetails: PetDetails;
}

const initialState: PetInsuranceState = {
    petInformation: {
        petName: "",
        petBreed: "",
        petGender: "",
        petAge: "",
    },
    petDetails: {
        petTypeBreed: "",
        dogSpayed: "",
        petRole: "",
    },
};

const petInsuranceSlice = createSlice({
    name: "petInsurance",
    initialState,
    reducers: {
        setPetInformation: (state, action: PayloadAction<PetInformation>) => {
            state.petInformation = action.payload;
        },
        setPetDetails: (state, action: PayloadAction<PetDetails>) => {
            state.petDetails = action.payload;
        },
        resetPetInsurance: (state) => {
            state.petInformation = initialState.petInformation;
            state.petDetails = initialState.petDetails;
        },
    },
});

export const { setPetInformation, setPetDetails, resetPetInsurance } = petInsuranceSlice.actions;
export default petInsuranceSlice.reducer;