import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MedicalInformation {
    hospitalizationClass: string;
    diagnosticTests: string;
    addFamily: string;
}

const initialState: MedicalInformation = {
    hospitalizationClass: "",
    diagnosticTests: "",
    addFamily: "",
};

const medicalInsuranceSlice = createSlice({
    name: "medicalInsurance",
    initialState,
    reducers: {
        setMedicalInformation: (state, action:PayloadAction<MedicalInformation>) => {
            state.hospitalizationClass = action.payload.hospitalizationClass;
            state.diagnosticTests = action.payload.diagnosticTests;
            state.addFamily = action.payload.addFamily;
        },
        resetMedicalInsurance: (state) => {
            state.hospitalizationClass = initialState.hospitalizationClass;
            state.diagnosticTests = initialState.diagnosticTests;
            state.addFamily = initialState.addFamily;
        },
    },
});

export const { setMedicalInformation, resetMedicalInsurance } = medicalInsuranceSlice.actions;
export default medicalInsuranceSlice.reducer;