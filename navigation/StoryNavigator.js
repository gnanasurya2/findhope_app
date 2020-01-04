import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screen/HomeScreen";
import StoriesScreen from "../screen/StoriesScreen";
import StoryScreen from "../screen/StoryScreen";

import Color from "../constants/Colors";
const StoryNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Stories: StoriesScreen,
    Story: StoryScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Color.primary
      },
      headerTintColor: "white"
    }
  }
);

export default createAppContainer(StoryNavigator);
