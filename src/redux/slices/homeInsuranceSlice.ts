import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HomeInformation {
    homeStatus: string;
    primaryHome: string;
    homeSurafaceArea: string;
    homeContents: string;
    buildingAge: string;
}

interface HomeDetails {
    homeAddress: string;
    city: string;
    state: string;
    zipCode: string;
}

interface HomeInsuranceState {
    homeInformation: HomeInformation;
    homeDetails: HomeDetails;
}

const initialState: HomeInsuranceState = {
    homeInformation: {
        homeStatus: "",
        primaryHome: "",
        homeSurafaceArea: "",
        homeContents: "",
        buildingAge: "",
    },
    homeDetails: {
        homeAddress: "",
        city: "",
        state: "",
        zipCode: "",
    },
};

const homeInsuranceSlice = createSlice({
    name: "homeInsurance",
    initialState,
    reducers: {
        setHomeInformation: (state, action: PayloadAction<HomeInformation>) => {
            state.homeInformation = action.payload;
        },
        setHomeDetails: (state, action: PayloadAction<HomeDetails>) => {
            state.homeDetails = action.payload;
        },
        resetHomeInsurance: (state) => {
            state.homeInformation = initialState.homeInformation;
            state.homeDetails = initialState.homeDetails;
        },
    },
});

export const { setHomeInformation, setHomeDetails, resetHomeInsurance } = homeInsuranceSlice.actions;
export default homeInsuranceSlice.reducer;