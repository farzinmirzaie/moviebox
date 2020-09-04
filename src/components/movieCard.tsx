import React from "react";
import { View, TouchableNativeFeedback, Text, StyleSheet } from "react-native";
import { Image } from "react-native-expo-image-cache";
import { Item } from "../api/models";

interface Props {
  data: Item;
  onPress: () => void;
}

const MovieCard: React.FC<Props> = ({ data, onPress }): JSX.Element => {
  return (
    <View style={{ flex: 1 }}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.container}>
          <Image uri={data.Poster} style={styles.image} />
          <Text style={styles.title}>{data.Title}</Text>
          <Text style={styles.info}>
            {data.Year} / {data.Type}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
  },
  image: {
    backgroundColor: "lightgray",
    width: "100%",
    height: 220,
    borderRadius: 5,
  },
  title: {
    marginTop: 10,
    color: "black",
    fontSize: 18,
  },
  info: {
    marginTop: 10,
    color: "gray",
    fontSize: 14,
  },
});

export default MovieCard;
