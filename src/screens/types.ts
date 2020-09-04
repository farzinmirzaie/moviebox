import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const Routes = {
  Home: undefined,
  Movie: undefined,
};

export interface INavigationProps<RouteName extends keyof typeof Routes> {
  navigation: StackNavigationProp<typeof Routes, keyof typeof Routes>;
  route: RouteProp<typeof Routes, RouteName>;
}
