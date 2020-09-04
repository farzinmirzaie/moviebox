import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Movie from "./Movie";

const Screens: React.FC = (): JSX.Element => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={Home} />
        <Screen name="Movie" component={Movie} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Screens;
