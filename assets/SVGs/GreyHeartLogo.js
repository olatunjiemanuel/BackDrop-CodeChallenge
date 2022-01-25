import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";

const GreyHeartLogo = (props) => {
  const { strokeColor, bgColor } = props;
  return (
    <Svg
      width={18}
      height={18}
      fill={bgColor}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.63 3.458a4.125 4.125 0 0 0-5.835 0L9 4.253l-.795-.795A4.126 4.126 0 0 0 2.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.125 4.125 0 0 0 0-5.835v0Z"
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.3}
      />
    </Svg>
  );
};

export default GreyHeartLogo;
