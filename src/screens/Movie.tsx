import React from "react";
import { View, Text } from "react-native";
import { INavigationProps } from "./types";

const Movie: React.FC<INavigationProps<"Movie">> = (): JSX.Element => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Movie Screen</Text>
    </View>
  );
};

export default Movie;
