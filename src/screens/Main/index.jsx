import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import FirstHelpScreen from './FirstHelp';
import NavigationBackBar from './../../components/UI/NavigationBackBar';
import WhatToDoScreen from './WhatToDo';
import CoesKidsScreen from './CoesKids';
import MapScreen from './Map';
import FirstHelpItemsScreen from './FirstHelp/FirstHelpItems';
import CardioPulmonaryReanimationScreen from './FirstHelp/CardioPulmonaryReanimation';
import BleedingScreen from './FirstHelp/Bleeding';
import StrokeScreen from './FirstHelp/Stroke';
import AmmoniScreen from './FirstHelp/AMMONIA';
import FirstAidScreen from './FirstHelp/FirstAid';
import BurnScreen from './FirstHelp/Burn';
import ConsciousnessScreen from './FirstHelp/Consciousness';
import BreathScreen from './FirstHelp/Breath';
import FrostbiteScreen from './FirstHelp/Frostbite';
import ForeignBodyScreen from './FirstHelp/ForeignBody';
import ConvulsionsScreen from './FirstHelp/Convulsions';
import StormScreen from './WhatToDo/Storm';
import GasInApartmentScreen from './WhatToDo/GasInApartment';
import StuckInElevatorScreen from './WhatToDo/StuckInElevator';
import EarthquakeScreen from './WhatToDo/Earthquake';
import AvalancheScreen from './WhatToDo/Avalanche';
import FloodActionScreen from './WhatToDo/FloodAction';
import SnakeScreen from './WhatToDo/Snake';
import DogScreen from './WhatToDo/Dog';
import BathingSafetyScreen from './WhatToDo/BathingSafety';
import DrowningManScreen from './WhatToDo/DrowningMan';
import Notifications from "./Notifications";
import FoodPoisoning from "./FirstHelp/FoodPoisoning";
import Sunstroke from "./FirstHelp/Sunstroke";
import Insects from "./FirstHelp/Insects";
import Abrasion from "./FirstHelp/Abrasion";
import SignsFracture from "./FirstHelp/SignsFracture";
import Hydrargyrum from "./FirstHelp/Hydrargyrum";
import Lightning from "./FirstHelp/Lightning";
import SnakeBite from "./FirstHelp/SnakeBite";
import Compass from "./FirstHelp/Compass";
import Epilepsy from "./FirstHelp/Epilepsy";

const Stack = createNativeStackNavigator();

const Index = () => {
    return (
        <>
            <Stack.Navigator initialRouteName='Home' screenOptions={{
                header: (props) => <NavigationBackBar props={props}/>,
                animation: "slide_from_right",
                animationDuration: 50,
            }}>
                {/* Main routes */}
                <Stack.Screen name={"Home"} component={Home} options={{headerShown: false}}/>
                <Stack.Screen name={"FirstHelp"} component={FirstHelpScreen} options={{headerShown: false}}/>
                <Stack.Screen name={"WhatToDo"} component={WhatToDoScreen} options={{headerShown: false}}/>
                <Stack.Screen name={"CoesKids"} component={CoesKidsScreen} options={{headerShown: false}}/>
                {/*<Stack.Screen name="Map" component={MapScreen}/>*/}
                <Stack.Screen name={"Notifications"} component={Notifications}/>
                {/* / Main routes */}
                {/* First Help Screens */}
                <Stack.Screen name={"FirstHelpItem"} component={FirstHelpItemsScreen}/>
                <Stack.Screen name={"Bleeding"} component={BleedingScreen}/>
                <Stack.Screen name={"Epilepsy"} component={Epilepsy}/>
                <Stack.Screen name={"CardioPulmonaryReanimation"} component={CardioPulmonaryReanimationScreen}/>
                <Stack.Screen name={"Stroke"} component={StrokeScreen}/>
                <Stack.Screen name={"AMMONIA"} component={AmmoniScreen}/>
                <Stack.Screen name={"FirstAid"} component={FirstAidScreen}/>
                <Stack.Screen name={"Burn"} component={BurnScreen}/>
                <Stack.Screen name={"Consciousness"} component={ConsciousnessScreen}/>
                <Stack.Screen name={"Breath"} component={BreathScreen}/>
                <Stack.Screen name={"Frostbite"} component={FrostbiteScreen}/>
                <Stack.Screen name={"ForeignBody"} component={ForeignBodyScreen}/>
                <Stack.Screen name={"Convulsions"} component={ConvulsionsScreen}/>
                <Stack.Screen name={"FoodPoisoning"} component={FoodPoisoning}/>
                <Stack.Screen name={"Sunstroke"} component={Sunstroke}/>
                <Stack.Screen name={"Insects"} component={Insects}/>
                <Stack.Screen name={"Abrasions"} component={Abrasion}/>
                <Stack.Screen name={"SignsFracture"} component={SignsFracture}/>
                <Stack.Screen name={"Hydrargyrum"} component={Hydrargyrum}/>
                <Stack.Screen name={"Lightning"} component={Lightning}/>
                <Stack.Screen name={"SnakeBite"} component={SnakeBite}/>
                <Stack.Screen name={"Compass"} component={Compass}/>
                {/* / First Help Screens */}

                {/*What ToDo Items start*/}
                <Stack.Screen name={"Storm"} component={StormScreen}/>
                <Stack.Screen name={"GasInApartment"} component={GasInApartmentScreen}/>
                <Stack.Screen name={"StuckInElevator"} component={StuckInElevatorScreen}/>
                <Stack.Screen name={"Earthquake"} component={EarthquakeScreen}/>
                <Stack.Screen name={"Avalanche"} component={AvalancheScreen}/>
                <Stack.Screen name={"FloodAction"} component={FloodActionScreen}/>
                <Stack.Screen name={"Snake"} component={SnakeScreen}/>
                <Stack.Screen name={"Dog"} component={DogScreen}/>
                <Stack.Screen name={"BathingSafety"} component={BathingSafetyScreen}/>
                <Stack.Screen name={"DrowningMan"} component={DrowningManScreen}/>
                {/*What ToDo Items end*/}
            </Stack.Navigator>
        </>
    );
};
export default Index;