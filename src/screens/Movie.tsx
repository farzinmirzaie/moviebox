import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch, actions } from "../redux";
import { INavigationProps } from "./types";
import { IState } from "../redux/types";

const Movie: React.FC<INavigationProps<"Movie">> = ({
  navigation,
  route: {
    params: { data },
  },
}): JSX.Element => {
  navigation.setOptions({ title: data.Title });

  const dispatch = useDispatch();
  const state: IState = useSelector((state: IState) => state);
  const movieData = state.movies.find((movie) => movie.imdbID === data.imdbID);

  useEffect(() => {
    if (!movieData) dispatch(actions.details(data.imdbID));
  }, []);

  if (!movieData)
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollView}
      >
        <Image source={{ uri: movieData?.Poster }} style={styles.poster} />
        <Text style={styles.title}>
          Actors: <Text style={styles.value}>{movieData?.Actors}</Text>
        </Text>
        <Text style={styles.title}>
          Awards: <Text style={styles.value}>{movieData?.Awards}</Text>
        </Text>
        <Text style={styles.title}>
          BoxOffice: <Text style={styles.value}>{movieData?.BoxOffice}</Text>
        </Text>
        <Text style={styles.title}>
          Country: <Text style={styles.value}>{movieData?.Country}</Text>
        </Text>
        <Text style={styles.title}>
          DVD: <Text style={styles.value}>{movieData?.DVD}</Text>
        </Text>
        <Text style={styles.title}>
          Director: <Text style={styles.value}>{movieData?.Director}</Text>
        </Text>
        <Text style={styles.title}>
          Genre: <Text style={styles.value}>{movieData?.Genre}</Text>
        </Text>
        <Text style={styles.title}>
          Language: <Text style={styles.value}>{movieData?.Language}</Text>
        </Text>
        <Text style={styles.title}>
          Metascore: <Text style={styles.value}>{movieData?.Metascore}</Text>
        </Text>
        <Text style={styles.title}>
          Plot: <Text style={styles.value}>{movieData?.Plot}</Text>
        </Text>
        <Text style={styles.title}>
          Production: <Text style={styles.value}>{movieData?.Production}</Text>
        </Text>
        <Text style={styles.title}>
          Rated: <Text style={styles.value}>{movieData?.Rated}</Text>
        </Text>
        <Text style={styles.title}>
          Released: <Text style={styles.value}>{movieData?.Released}</Text>
        </Text>
        <Text style={styles.title}>
          Response: <Text style={styles.value}>{movieData?.Response}</Text>
        </Text>
        <Text style={styles.title}>
          Runtime: <Text style={styles.value}>{movieData?.Runtime}</Text>
        </Text>
        <Text style={styles.title}>
          Title: <Text style={styles.value}>{movieData?.Title}</Text>
        </Text>
        <Text style={styles.title}>
          Type: <Text style={styles.value}>{movieData?.Type}</Text>
        </Text>
        <Text style={styles.title}>
          Website: <Text style={styles.value}>{movieData?.Website}</Text>
        </Text>
        <Text style={styles.title}>
          Writer: <Text style={styles.value}>{movieData?.Writer}</Text>
        </Text>
        <Text style={styles.title}>
          Year: <Text style={styles.value}>{movieData?.Year}</Text>
        </Text>
        <Text style={styles.title}>
          imdbID: <Text style={styles.value}>{movieData?.imdbID}</Text>
        </Text>
        <Text style={styles.title}>
          imdbRating: <Text style={styles.value}>{movieData?.imdbRating}</Text>
        </Text>
        <Text style={styles.title}>
          imdbVotes: <Text style={styles.value}>{movieData?.imdbVotes}</Text>
        </Text>
        {movieData.Ratings && (
          <Text style={styles.title}>
            Ratings:{" "}
            {movieData.Ratings.map((rating, index) => (
              <Text key={index} style={styles.value}>
                {`${rating.Source}: ${rating.Value}, `}
              </Text>
            ))}
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    width: "100%",
  },
  poster: {
    width: "100%",
    height: Dimensions.get("window").width * 1.5,
  },
  title: {
    margin: 10,
    color: "black",
    fontSize: 14,
  },
  value: {
    margin: 10,
    color: "gray",
    fontSize: 14,
  },
});

export default Movie;
