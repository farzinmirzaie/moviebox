import React, { useState } from "react";
import { View, TextInput, FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch, actions } from "../redux";
import { INavigationProps } from "./types";
import { IState } from "../redux/types";
import { Item } from "../api/models";
import { MovieCard } from "../components";
import { AntDesign } from "@expo/vector-icons";

const Home: React.FC<INavigationProps<"Home">> = ({
  navigation,
}): JSX.Element => {
  navigation.setOptions({ title: "MovieBox" });

  const dispatch = useDispatch();
  const results: Item[] = useSelector((state: IState) => state.results);

  const [query, setQuery] = useState("");

  const search = (): void => {
    if (query && query.trim() !== "") {
      dispatch(actions.search(query.trim()));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={query}
          onChangeText={(text) => setQuery(text)}
          placeholder={"Search..."}
          returnKeyType="search"
          onEndEditing={() => search()}
          style={styles.input}
        />
        <AntDesign
          name="search1"
          size={24}
          color="black"
          onPress={() => search()}
          style={{ margin: 10 }}
        />
      </View>
      <FlatList
        numColumns={2}
        data={results}
        renderItem={({ item }) => (
          <MovieCard
            data={item}
            onPress={() => navigation.push("Movie", { id: item.imdbID })}
          />
        )}
        keyExtractor={(item) => item.imdbID}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "lightgrey",
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
  },
  input: {
    marginLeft: 10,
    height: 30,
    flex: 1,
  },
  list: {
    flex: 1,
    width: "100%",
  },
});

export default Home;
