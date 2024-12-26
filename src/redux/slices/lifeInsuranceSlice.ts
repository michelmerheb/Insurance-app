import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TermLifeData {
    weight?: string;
    height?: string;
    smokingStatus?: string;
    alcoholConsumption?: string;
    medicalHistory?: string;
    medications?: string;
    lifestyle?: string;
    highRiskActivities?: string;
    idNumber?: string;
    maritalStatus?: string;
    beneficiaryName?: string;
    beneficiaryRelationship?: string;
    beneficiaryDateOfBirth?: string;
    beneficiaryNumber?: string;
    occupation?: string;
    employerName?: string;
    coverageAmount?: string;
    policyDuration?: string;
  }

export interface PermanentLifeData {
    weight?: string;
    height?: string;
    smokingStatus?: string;
    alcoholConsumption?: string;
    medicalHistory?: string;
    medications?: string;
    lifestyle?: string;
    highRiskActivities?: string;
    idNumber?: string;
    maritalStatus?: string;
    beneficiaryName?: string;
    beneficiaryRelationship?: string;
    beneficiaryDateOfBirth?: string;
    beneficiaryNumber?: string;
    occupation?: string;
    employerName?: string;
    permanentCoverageAmount?: string;
    premiumPaymentPeriod?: string;
    cashValueGrowth?: string;
  }


type LifeInsuranceState = {
    selectedLifeInsuranceType: 'term' | 'permanent' | null;
    termLifeData: TermLifeData;
    permanentLifeData: PermanentLifeData;
  };

const initialState: LifeInsuranceState = {
    selectedLifeInsuranceType: null,
    termLifeData: {},
    permanentLifeData: {},
};

const lifeInsuranceSlice = createSlice({
    name: "lifeInsurance",
    initialState,
    reducers: {
        setLifeInsuranceType(state, action: PayloadAction<'term' | 'permanent'>) {
            state.selectedLifeInsuranceType = action.payload;
    },
    saveField(
        state,
        action: PayloadAction<{
          type: "term" | "permanent";
          field: keyof TermLifeData | keyof PermanentLifeData;
          value: string;
        }>
      ) {
        const { type, field, value } = action.payload;
        if (type === "term") {
          state.termLifeData[field as keyof TermLifeData] = value;
        } else if (type === "permanent") {
          state.permanentLifeData[field as keyof PermanentLifeData] = value;
        }
      },
    resetInsuranceType(state) {
        state.termLifeData = {};
        state.permanentLifeData = {};
    }
}
});

export const { setLifeInsuranceType, saveField, resetInsuranceType} = lifeInsuranceSlice.actions;
export default lifeInsuranceSlice.reducer;