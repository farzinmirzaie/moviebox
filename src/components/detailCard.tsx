import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
  value: string;
}

const DetailCard: React.FC<Props> = ({ title, value }): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
  },
  title: {
    color: "black",
    fontSize: 18,
  },
  value: {
    marginTop: 10,
    color: "gray",
    fontSize: 14,
  },
});

export default DetailCard;
