import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// SVG Imports
import GreyHeartLogo from "../assets/SVGs/GreyHeartLogo";

// colors import
import colors from "../assets/Colors/Colors";

const RenderFaveItem = (props) => {
  const { name, image } = props;
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
      <View style={styles.imageDescriptionContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>{name}</Text>
        </View>
        <TouchableOpacity style={styles.greyHeart}>
          <GreyHeartLogo
            strokeColor={colors.selectedHeartColor}
            // bgColor={colors.selectedHeartColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RenderFaveItem;

const styles = StyleSheet.create({
  renderItemContainer: {
    marginRight: 25,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
  },
  imageDescriptionContainer: {
    flexDirection: "row",
    marginBottom: 25,
  },
  textContainer: {
    width: 122,
  },
  nameText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
  },
  greyHeart: {
    marginLeft: 10,
  },
});
