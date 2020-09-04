import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./src/redux";
import Screens from "./src/screens";

const App: React.FC = (): JSX.Element => {
  return (
    <StoreProvider store={store}>
      <Screens />
    </StoreProvider>
  );
};

export default App;
