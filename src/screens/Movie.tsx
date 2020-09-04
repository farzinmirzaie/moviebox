import React from "react";
import { View, Text } from "react-native";
import { INavigationProps } from "./types";

const Movie: React.FC<INavigationProps<"Movie">> = ({
  route: {
    params: { id },
  },
}): JSX.Element => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>ID: {id}</Text>
    </View>
  );
};

export default Movie;
