import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screens from "./src/screens";
import "react-native-gesture-handler";
import i18n from "./src/localization/i18n";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider } from "react-redux";
import { store } from "./src/state/store";
import YaMap from 'react-native-yamap';
const Stack = createNativeStackNavigator();
YaMap.init('87c50a75-a115-4df6-ae1c-001af89e44bd');
export default function App() {
  return (
    <PaperProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Screens" component={Screens} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  );
}
