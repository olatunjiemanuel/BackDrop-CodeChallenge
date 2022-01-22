import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [tempData, setTempData] = useState([]);
  return (
    <AppContext.Provider value={{ tempData, setTempData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
