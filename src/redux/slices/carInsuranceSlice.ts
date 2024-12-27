import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CarInformation {
    carMake: string;
    carModel: string;
    carYear: string;
    carCapacity: string;
    carPlate: string;
    carCode: string;
    carValue: string;
  };

const initialState: CarInformation = {
    carMake: "",
    carModel: "",
    carYear: "",
    carCapacity: "",
    carPlate: "",
    carCode: "",
    carValue: "",
};

const carInsuranceSlice = createSlice({
    name: "carInsurance",
    initialState,
    reducers: {
        setCarInformation: (state, action: PayloadAction<CarInformation>) => {
            state.carMake = action.payload.carMake;
            state.carModel = action.payload.carModel;
            state.carYear = action.payload.carYear;
            state.carCapacity = action.payload.carCapacity;
            state.carPlate = action.payload.carPlate;
            state.carCode = action.payload.carCode;
            state.carValue = action.payload.carValue;
        },
        resetCarInformation: (state) => {
            state.carMake = initialState.carMake;
            state.carModel = initialState.carModel;
            state.carYear = initialState.carYear;
            state.carCapacity = initialState.carCapacity;
            state.carPlate = initialState.carPlate;
            state.carCode = initialState.carCode;
            state.carValue = initialState.carValue;
        },
    },
        
});

export const { setCarInformation, resetCarInformation } = carInsuranceSlice.actions;
export default carInsuranceSlice.reducer;