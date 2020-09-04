import React from "react";
import { View, Text, Button } from "react-native";
import { INavigationProps } from "./types";

const Home: React.FC<INavigationProps<"Home">> = ({
  navigation,
}): JSX.Element => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to movie screen"
        onPress={() => navigation.push("Movie")}
      />
    </View>
  );
};

export default Home;
