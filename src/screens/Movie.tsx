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
import { DetailCard } from "../components";

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
        <DetailCard title={"Title"} value={movieData.Title} />
        <DetailCard title={"Year"} value={movieData.Year} />
        <DetailCard title={"Plot"} value={movieData.Plot} />
        <DetailCard title={"Actors"} value={movieData.Actors} />
        <DetailCard title={"Director"} value={movieData.Director} />
        <DetailCard title={"Writer"} value={movieData.Writer} />
        <DetailCard title={"Awards"} value={movieData.Awards} />
        <DetailCard title={"BoxOffice"} value={movieData.BoxOffice} />
        <DetailCard title={"DVD"} value={movieData.DVD} />
        <DetailCard title={"Genre"} value={movieData.Genre} />
        <DetailCard title={"Language"} value={movieData.Language} />
        <DetailCard title={"Metascore"} value={movieData.Metascore} />
        <DetailCard title={"Production"} value={movieData.Production} />
        <DetailCard title={"Rated"} value={movieData.Rated} />
        <DetailCard title={"Released"} value={movieData.Released} />
        <DetailCard title={"Runtime"} value={movieData.Runtime} />
        <DetailCard title={"Response"} value={movieData.Response} />
        <DetailCard title={"Type"} value={movieData.Type} />
        <DetailCard title={"Website"} value={movieData.Website} />
        <DetailCard title={"imdbID"} value={movieData.imdbID} />
        <DetailCard title={"imdbRating"} value={movieData.imdbRating} />
        <DetailCard title={"imdbVotes"} value={movieData.imdbVotes} />
        <DetailCard
          title={"Ratings"}
          value={movieData.Ratings.map(
            (ratings) => `${ratings.Source}: ${ratings.Value}`
          ).join("\n")}
        />
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
