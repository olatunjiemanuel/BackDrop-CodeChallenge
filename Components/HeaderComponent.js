import React from "react";
import { StyleSheet, Text, View } from "react-native";

// colors Imports
import colors from "../assets/Colors/Colors";

const HeaderComponent = (props) => {
  const { text } = props;
  return (
    <View>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 24,
    color: colors.black,
  },
});
