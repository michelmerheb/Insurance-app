import { configureStore } from "@reduxjs/toolkit";
import lifeInsuranceReducer from "./slices/lifeInsuranceSlice";
import petInsuranceReducer from "./slices/petInsuranceSlice";

export const store = configureStore({
    reducer: {
        lifeInsurance: lifeInsuranceReducer,
        petInsurance: petInsuranceReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;