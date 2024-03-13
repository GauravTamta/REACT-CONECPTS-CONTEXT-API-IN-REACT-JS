import { createContext, useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ComA from "./ComA";

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <>
      <FirstName.Provider value={"By gaurav "}>
        <LastName.Provider value={"Tamta"}>
          <ComA />;
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;
export { FirstName, LastName };
