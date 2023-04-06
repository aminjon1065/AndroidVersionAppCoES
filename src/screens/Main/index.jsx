import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Home from './Home'
import FirstHelpScreen from './FirstHelp'
import NavigationBackBar from './../../components/UI/NavigationBackBar'
const Index = () => {
    return (
        <>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ header: (props) => <NavigationBackBar props={props} />, animation: 'slide_from_right' }}>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="FirstHelp" component={FirstHelpScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    );
};

export default Index;