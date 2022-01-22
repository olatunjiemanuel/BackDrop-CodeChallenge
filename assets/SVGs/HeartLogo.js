import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HeartLogo = (props) => {
  const { color } = props;
  return (
    <Svg
      width={25}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.077 2.994a5.959 5.959 0 0 0-8.429 0L12.5 4.143l-1.148-1.149a5.96 5.96 0 0 0-8.429 8.428l1.149 1.149 8.428 8.428 8.428-8.428 1.149-1.149a5.96 5.96 0 0 0 0-8.428v0Z"
        fill={color}
      />
    </Svg>
  );
};

export default HeartLogo;
