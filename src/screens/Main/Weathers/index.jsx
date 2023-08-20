import React from 'react';
import {View, Text} from "react-native";
import NavigationBackBar from "../../../components/UI/NavigationBackBar";
import {useSelector} from "react-redux";

const Index = (props) => {
    const selectLocation = useSelector(state => state.locationState);
    return (
        <>
            <NavigationBackBar props={props}/>
            <View>
                <Text>{selectLocation.latitude} - {selectLocation.longitude}</Text>
            </View>
        </>
    );
};

export default Index;