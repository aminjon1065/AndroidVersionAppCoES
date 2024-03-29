import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Screens from "./src/screens";
import "react-native-gesture-handler";
import i18n from "./src/localization/i18n";
import {Provider as PaperProvider} from "react-native-paper";
import {Provider} from "react-redux";
import {store} from "./src/state/store";

const Stack = createNativeStackNavigator();
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
                        <Stack.Screen name="Screens" component={Screens}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        </PaperProvider>
    );
}
