import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TravelInsurance {
    residenceCountry: string;
    destinationCountry: string;
    addFamily: string;
}

const initialState: TravelInsurance = {
    residenceCountry: "",
    destinationCountry: "",
    addFamily: "",
};

const travelInsuranceSlice = createSlice({
    name: "travelInsurance",
    initialState,
    reducers: {
        setTravelInformation: (state, action: PayloadAction<TravelInsurance>) => {
            state.residenceCountry = action.payload.residenceCountry;
            state.destinationCountry = action.payload.destinationCountry;
            state.addFamily = action.payload.addFamily;
        },
        resetTravelInsurance: (state) => {
            state.residenceCountry = initialState.residenceCountry;
            state.destinationCountry = initialState.destinationCountry;
            state.addFamily = initialState.addFamily;
        },
    },
});

export const { setTravelInformation, resetTravelInsurance } = travelInsuranceSlice.actions;
export default travelInsuranceSlice.reducer;

