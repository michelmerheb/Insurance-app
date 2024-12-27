import { configureStore } from "@reduxjs/toolkit";
import lifeInsuranceReducer from "./slices/lifeInsuranceSlice";
import petInsuranceReducer from "./slices/petInsuranceSlice";
import homeInsuranceReducer from "./slices/homeInsuranceSlice"
import medicalInsuranceReducer from "./slices/medicalInsuranceSlice";
import travelInsuranceReducer from "./slices/travelInsuranceSlice";
import carInsuranceReducer from "./slices/carInsuranceSlice";

export const store = configureStore({
    reducer: {
        lifeInsurance: lifeInsuranceReducer,
        petInsurance: petInsuranceReducer,
        homeInsurance: homeInsuranceReducer,
        medicalInsurance: medicalInsuranceReducer,
        travelInsurance: travelInsuranceReducer,
        carInsurance: carInsuranceReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;