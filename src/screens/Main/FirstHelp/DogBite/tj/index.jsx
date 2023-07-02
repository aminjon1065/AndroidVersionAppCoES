import React from 'react';
import {ScrollView, View, Text} from "react-native";

const Index = ({darkMode}) => {
    return (
        <View>
            <ScrollView>
                <View>
                    <Text className={"text-center text-2xl text-red-500 font-bold"}>
                        УКУС СОБАКИ.
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default Index;