import React from "react";
import NavigationContainerScreen from "./src/navigations/NavigationContainerScreen";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainerScreen />
      </Provider>
    </>
  );
}
