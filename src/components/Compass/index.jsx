import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import * as Location from 'expo-location';
import {Magnetometer} from 'expo-sensors';
import compass from '../../screens/Main/FirstHelp/Compass/assets/compass.png';
import NorthIcon from 'react-native-vector-icons/MaterialIcons';

export default function Compass() {
    const [heading, setHeading] = useState(0);
    const [declination, setDeclination] = useState(0);

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                alert('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setDeclination(10); // предположим, магнитная деклинация равна 10 градусам
        })();

        let subscription = Magnetometer.addListener(data => {
            let angle = Math.atan2(data.y, data.x);
            let degree = angle * (180 / Math.PI) + declination;
            setHeading(degree);
        });

        return () => {
            subscription && subscription.remove();
        };
    }, [declination]);

    return (
        <View className='flex-1 justify-center items-center'>
            <View className='relative w-24 h-24'>
                <Image
                    source={compass}
                    className={"absolute w-full h-full"}
                    style={{transform: [{rotateZ: `${-heading}deg`}]}}
                />
                <Text
                    classNane='absolute w-full h-full'
                >N</Text>
            </View>
            <Text className='text-xl font-bold text-blue-600 mt-4'>Heading: {Math.round(heading)}°</Text>
        </View>
    );
}
