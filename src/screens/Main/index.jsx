import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Home from './Home';
import FirstHelpScreen from './FirstHelp';
import NavigationBackBar from './../../components/UI/NavigationBackBar';
import WhatToDoScreen from './WhatToDo';
import CoesKidsScreen from './CoesKids';
import FirstHelpItemsScreen from './FirstHelp/FirstHelpItems';
import CardioPulmonaryReanimationScreen from './FirstHelp/CardioPulmonaryReanimation';
import BleedingScreen from './FirstHelp/Bleeding';
import MapScreen from './Map';
const Index = () => {
    return (
        <>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ header: (props) => <NavigationBackBar props={props} />, animation: 'slide_from_right' }}>
                {/* Main routes */}
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="FirstHelp" component={FirstHelpScreen} options={{ headerShown: false }} />
                <Stack.Screen name="WhatToDo" component={WhatToDoScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CoesKids" component={CoesKidsScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Map" component={MapScreen} />
                {/* / Main routes */}

                {/* First Help Screens */}
                <Stack.Screen name="FirstHelpItem" component={FirstHelpItemsScreen} />
                <Stack.Screen name="Bleeding" component={BleedingScreen} />
                <Stack.Screen name={"CardioPulmonaryReanimation"} component={CardioPulmonaryReanimationScreen}/>

                {/* / First Help Screens */}
            </Stack.Navigator>
        </>
    );
};

export default Index;