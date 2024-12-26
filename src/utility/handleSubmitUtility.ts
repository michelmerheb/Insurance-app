import { AppDispatch } from "../redux/store";
import { saveField } from "../redux/slices/lifeInsuranceSlice";
import { TermLifeData, PermanentLifeData } from "../redux/slices/lifeInsuranceSlice";

type HandleSubmitParams = {
  values: Record<string, string>;
  selectedType: "term" | "permanent" | null;
  dispatch: AppDispatch;
  navigate: (screen: string) => void;
  nextScreen: string;
};

export const handleSubmitUtility = ({
  values,
  selectedType,
  dispatch,
  navigate,
  nextScreen,
}: HandleSubmitParams) => {
  if (selectedType) {
    Object.keys(values).forEach((field) => {
      dispatch(
        saveField({
          type: selectedType,
          field: field as keyof (typeof selectedType extends "term"
            ? TermLifeData
            : PermanentLifeData),
          value: values[field],
        })
      );
    });
    navigate(nextScreen);
  }
};
