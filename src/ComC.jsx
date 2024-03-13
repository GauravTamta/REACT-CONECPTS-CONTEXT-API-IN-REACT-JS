import React from "react";
import { FirstName, LastName } from "./App";

function ComC() {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lanme) => {
                return (
                  <p>
                    This is Comc and {fname} {lanme}
                  </p>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
}

export default ComC;
