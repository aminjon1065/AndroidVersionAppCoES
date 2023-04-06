import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Searchbar, TextInput } from 'react-native-paper';
import ArrowLeftIcon from 'react-native-vector-icons/Octicons'

const Index = (props) => {
    const ref = React.useRef(null);
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View className="h-screen bg-white">
            <View className={"px-2"}>
                <View className={"flex flex-row items-center"}>

                    <View className="mr-1">
                        <TouchableOpacity
                         className=" items-center"
                         onPress={() => props.navigation.goBack()}
                        >
                            <ArrowLeftIcon name='arrow-left' size={28} color={'#146C94'} />
                            <Text className="text-[#146C94]">
                                Назад
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-1 ml-1">
                        <Searchbar
                            className={"bg-slate-100 rounded text-slate-300"}
                            onIconPress={() => ref.current.focus()}
                            ref={ref}
                            placeholder="Поиск"
                            placeholderTextColor='#E0E0E0'
                            onChangeText={onChangeSearch}
                            value={searchQuery}
                            iconColor={'#146C94'}
                        />
                    </View>
                </View>
            </View>
        </View >
    );
};

export default Index;