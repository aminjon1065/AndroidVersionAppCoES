import React, {useEffect, useState} from 'react';
import {Text, View} from "react-native";
import Ru from "./ru";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Index = () => {
    const [lang, setLang] = useState("");
    useEffect(() => {
        async function getLng() {
            const storageLng = await AsyncStorage.getItem("lng");
            setLang(storageLng)
        }

        getLng().then(r => console.log(r));
    }, [lang]);
    return (
        <View className={"bg-white"}>
            {
                lang === "ru"
                    ?
                    <Ru/>
                    :
                    <Text>
                        Not found
                    </Text>
            }
        </View>
    );
};

export default Index;