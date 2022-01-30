import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

// component imports
import RenderFaveItem from "../Components/RenderFaveItem";
import HeaderComponent from "../Components/HeaderComponent";

const Fave = () => {
  // const { tempData } = useContext(AppContext);

  // const [temporaryData, settemporaryData] = useState([]);
  const [Faved, setFaved] = useState([]);

  // const getData = () => {
  //   AsyncStorage.getItem("temp").then((value) => {
  //     settemporaryData(JSON.parse(value));
  //   });
  // };

  const getFaveData = () => {
    AsyncStorage.getItem("faveData").then((value) => {
      setFaved(JSON.parse(value));
      // console.log(Faved);
    });
  };

  useEffect(() => {
    // getData();
    getFaveData();
  }, [Faved]);

  return (
    <View style={styles.container}>
      <View style={styles.headerComponent}>
        <HeaderComponent text="Cats I Like" />
      </View>

      <FlatList
        data={Faved}
        numColumns={2}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          if (item?.image && item?.name) {
            return <RenderFaveItem name={item.name} image={item.image} />;
          }
        }}
      />
    </View>
  );
};

export default Fave;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    paddingHorizontal: 25,
  },
  headerComponent: {
    marginTop: 30,
    marginBottom: 25,
  },
});
