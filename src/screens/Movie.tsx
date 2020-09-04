import React from "react";
import { View, Text } from "react-native";
import { INavigationProps } from "./types";

const Movie: React.FC<INavigationProps<"Movie">> = ({
  navigation,
  route: {
    params: { data },
  },
}): JSX.Element => {
  navigation.setOptions({ title: data.Title });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>ID: {data.imdbID}</Text>
    </View>
  );
};

export default Movie;
