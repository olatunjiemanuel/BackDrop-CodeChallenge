import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  // const [tempData, setTempData] = useState([]);
  const [selected, setSelected] = useState(false);
  return (
    <AppContext.Provider value={{ selected, setSelected }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
