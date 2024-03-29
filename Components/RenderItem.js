import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// SVG Imports
import GreyHeartLogo from "../assets/SVGs/GreyHeartLogo";

// colors import
import colors from "../assets/Colors/Colors";

const RenderItem = (props) => {
  const {
    name,
    image,
    onPressHandler,
    // heartStrokeColor,
    // heartBackgroundColor,
  } = props;

  const [liked, setLiked] = useState(false);
  return (
    <View style={styles.renderItemContainer}>
      <View style={styles.image}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{name}</Text>
      </View>
      <TouchableOpacity
        onPress={onPressHandler}
        onPressOut={() => {
          liked ? setLiked(false) : setLiked(true);
        }}
        style={styles.greyHeart}
      >
        <GreyHeartLogo
          strokeColor={
            liked ? colors.selectedHeartColor : colors.unselectedHeartColor
          }
          bgColor={liked ? colors.selectedHeartColor : null}
        />
      </TouchableOpacity>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  renderItemContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 15,
    width: 180,
  },
  nameText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
  },
  greyHeart: {
    marginLeft: 72,
  },
});
