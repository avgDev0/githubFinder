import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // setAlert
  const setAlert = (content) => {
    dispatch({ type: SET_ALERT, payload: content });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  return (
    <AlertContext.Provider
      // whatever we want available in our app
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
