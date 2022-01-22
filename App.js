import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screen imports
import AllCats from "./Screens/All-Cats";
import Fave from "./Screens/Cats-I-Like";

// SVG Imports
import CatLogo from "./assets/SVGs/CatLogo";
import HeartLogo from "./assets/SVGs/HeartLogo";

// color import
import colors from "./assets/Colors/Colors";
import { AppProvider } from "./Context/AppContext";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: [
              {
                display: "flex",
                backgroundColor: "#fff",
              },
              null,
            ],
            tabBarActiveTintColor: "black",
            tabBarInActiveTintColor: "gray",
            header: () => null,
          }}
        >
          <Tab.Screen
            name="All Cats"
            component={AllCats}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.TabIcons}>
                  <CatLogo color={focused ? colors.active : colors.grayedOut} />
                </View>
              ),
            }}
          />
          <Tab.Screen
            name="Cats I like"
            component={Fave}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={styles.TabIcons}>
                  <HeartLogo
                    color={focused ? colors.active : colors.grayedOut}
                  />
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      </AppProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
