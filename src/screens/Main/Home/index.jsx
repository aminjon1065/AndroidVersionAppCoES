import React from 'react';
import {View, Text, Image} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import FirstHelpIcon from './../../../assets/img/Icons/Frame.png';

const Index = () => {
    return (
        <View
            className={"h-screen bg-white"}
        >
            <View className={"p-2 mt-5"}>
                <LinearGradient
                    start={[0.5, 1]} end={[0, 0.1]}
                    // Background Linear Gradient
                    className={"rounded-lg shadow-2xl shadow-indigo-800 bg-indigo-400"}
                    colors={['#56549E', '#AEA1E5', 'transparent']}
                >
                    <View className={"flex flex-row justify-around rounded h-24"}>
                        <View className={""}>
                            <Image source={FirstHelpIcon} className={"object-top bottom-5"}/>
                        </View>
                        <View className={"flex-1 justify-center"}>
                            <Text className={"text-2xl text-center text-white"}>
                                Lorem ipsum dolor sit.
                            </Text>
                            <Text className={"text-center text-white"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, voluptatem?
                            </Text>
                        </View>
                    </View>
                </LinearGradient>
            </View>
            <View className={"p-2 mt-5"}>
                <LinearGradient
                    start={[0.5, 1]} end={[0, 0.1]}
                    // Background Linear Gradient
                    className={"rounded-lg shadow-2xl shadow-indigo-800 bg-indigo-400"}
                    colors={['#56549E', '#AEA1E5', 'transparent']}
                >
                    <View className={"flex flex-row justify-around rounded h-24"}>
                        <View className={"flex-1 justify-center"}>
                            <Text className={"text-2xl text-center text-white"}>
                                Lorem ipsum dolor sit.
                            </Text>
                            <Text className={"text-center text-white"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, voluptatem?
                            </Text>
                        </View>
                        <View className={""}>
                            <Image source={FirstHelpIcon} className={"object-top bottom-5"}/>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </View>
    );
};

export default Index;