import React from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useSelector} from "react-redux";


const Index = () => {
    const myLocation = useSelector(state => state.locationState)
    const region = {
        latitude: 38.874655,
        longitude: 70.978313,
        // latitude: myLocation.latitude,
        // longitude: myLocation.longitude,
        latitudeDelta: 12,
        longitudeDelta: 5,
    };
    return (
        <View className={"bg-white h-screen"}>
            <MapView
                provider={PROVIDER_GOOGLE}
                zoomEnabled={true}
                minZoomLevel={5}  // default => 0
                maxZoomLevel={15} // default => 20
                initialRegion={region}
                className={"w-screen h-screen"}
            >
                <Marker
                    coordinate={{latitude: myLocation.latitude, longitude: myLocation.longitude}}
                    title={"Test"}
                    description={"Best University in the World"}
                />
            </MapView>
        </View>
    );
};

export default Index;