import React, { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch, actions } from "../redux";
import { AntDesign } from "@expo/vector-icons";
import { MovieCard } from "../components";
import { INavigationProps } from "./types";
import { IState } from "../redux/types";

const Home: React.FC<INavigationProps<"Home">> = ({
  navigation,
}): JSX.Element => {
  navigation.setOptions({ title: "MovieBox" });

  const dispatch = useDispatch();
  const state: IState = useSelector((state: IState) => state);

  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const search = (): void => {
    if (query && query.trim() !== "") {
      dispatch(actions.clear());
      dispatch(actions.search(query.trim(), 1));
      setPage(1);
    }
  };

  const loadMore = (): void => {
    dispatch(actions.search(query.trim(), page + 1));
    setPage((prev) => prev + 1);
  };

  const renderList = (): JSX.Element => (
    <FlatList
      numColumns={2}
      data={state.results}
      renderItem={({ item }) => (
        <MovieCard
          data={item}
          onPress={() => navigation.push("Movie", { data: item })}
        />
      )}
      keyExtractor={(item) => item.imdbID}
      onEndReached={() => loadMore()}
      onEndReachedThreshold={0.75}
      style={styles.list}
    />
  );

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
      {state.error && (
        <View style={styles.container}>
          <AntDesign name="exclamationcircle" size={24} color="gray" />
          <Text style={styles.error}>{state.error}</Text>
        </View>
      )}
      {state.results && renderList()}
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
  error: {
    margin: 10,
    color: "gray",
    fontSize: 14,
  },
  list: {
    flex: 1,
    width: "100%",
  },
});

export default Home;
