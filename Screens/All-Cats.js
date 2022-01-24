import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

//colors importn
import colors from "../assets/Colors/Colors";

// axios import
import axios from "axios";

// component Imports
import HeaderComponent from "../Components/HeaderComponent";
import RenderItem from "../Components/RenderItem";

const AllCats = () => {
  const [data, setData] = useState([]);
  //const { tempData, setTempData } = useContext(AppContext);
  const [tempData, setTempData] = useState([]);
  const [storedData, setStoredData] = useState([]);
  const [liked, setLiked] = useState([]);
  const [selected, setSelected] = useState(false);
  // const [favourites, setFavourites] = useState([]);

  const fetchData = async () => {
    await axios
      .get("https://api.thecatapi.com/v1/breeds?limit=50&page=0")
      .then((res) => {
        setData?.(res.data);
        if (data) {
          setTempData(data);
          AsyncStorage.setItem("temp", JSON.stringify(tempData));
          // alert("tempData Saved");
          // console.log(tempData);
        } else {
          alert("temp data not saved");
        }
        return data;
      });
  };

  const getData = () => {
    AsyncStorage.getItem("temp").then((value) => {
      setStoredData(JSON.parse(value));
    });
  };

  const saveFave = () => {
    setLiked(liked);
    AsyncStorage.setItem("faveData", JSON.stringify(liked));
    // console.log(liked);
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  useEffect(() => {
    getData();
  }, []);

  // var arr1 = [1, 2, 3, 4],
  //   arr2 = [2, 4],
  //   res = arr1.filter((item) => !arr2.includes(item));
  // console.log(res);

  return (
    <View style={styles.container}>
      <View style={styles.headerComponent}>
        <HeaderComponent text="All Cats" />
      </View>

      <FlatList
        data={storedData}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          if (item?.image?.url && item?.origin && item?.name && item?.id) {
            return (
              <RenderItem
                name={item.name}
                image={item.image.url}
                heartStrokeColor={
                  selected
                    ? colors.selectedHeartColor
                    : colors.unselectedHeartColor
                }
                heartBackgroundColor={
                  selected
                    ? colors.selectedHeartColor
                    : colors.unselectedHeartColor
                }
                onPressHandler={() => {
                  selected ? setSelected(false) : setSelected(true);
                  const some = {
                    id: item.id,
                    name: item.name,
                    image: item.image.url,
                  };
                  liked.push(some);
                  saveFave();
                  // console.log(liked);
                }}
              />
            );
          }
        }}
      />
    </View>
  );
};

export default AllCats;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 25,
    backgroundColor: colors.white,
    flex: 1,
    backgroundColor: colors.white,
  },
  headerComponent: {
    marginTop: 30,
    marginBottom: 25,
  },
});
