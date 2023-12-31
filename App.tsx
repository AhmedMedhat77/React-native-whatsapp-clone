import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AuthScreen from "./Screens/AuthScreen/AuthScreen";
import AuthLanguages from "./Screens/AuthScreen/AuthLanguages";
import {Provider} from "react-redux";
import {store} from "./Redux/Store";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false, headerShadowVisible: false}}
        >
          <Stack.Screen name="AuthScreen" component={AuthScreen} />
          <Stack.Screen name="AuthLanguages" component={AuthLanguages} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
