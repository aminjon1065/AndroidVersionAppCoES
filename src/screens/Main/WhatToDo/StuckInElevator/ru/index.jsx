import React from 'react';
import {View, Text, TouchableOpacity, Linking} from "react-native";
import {List} from "react-native-paper";
import CallIcon from 'react-native-vector-icons/Ionicons'

const Index = ({darkMode}) => {
    const call = async () => {
        try {
            await Linking.openURL(`tel:112`)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <View>
            <Text className={"text-4xl text-center text-red-400 font-bold"}>
                Застрял в лифте
            </Text>
            <View>
                <List.AccordionGroup>
                    <List.Accordion
                        title="1. Избегайте паники"
                        titleStyle={{color: darkMode ? 'white' : '#1E293B'}}
                        className={`${darkMode ? 'bg-slate-600 text-white' : 'text-slate-950 bg-slate-200'} rounded-lg mt-2`}
                        theme={{colors: {background: darkMode ? '#1E293B' : '#E2E8F0'}}}
                        id="1"
                    >
                        <List.Item
                            className={darkMode ? 'bg-slate-800' : `bg-slate-100`}
                            description={
                                () =>
                                    <View>
                                        <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                            Прежде всего, не бойтесь и не паникуйте.
                                            Расстегните теплую одежду, старайтесь дышать умеренно. Это поможет
                                            успокоиться и сберечь кислород, ведь неизвестно, сколько времени придется
                                            ждать помощи
                                        </Text>
                                    </View>
                            }
                        />
                    </List.Accordion>
                    <List.Accordion
                        titleStyle={{color: darkMode ? 'white' : '#1E293B'}}
                        className={`${darkMode ? 'bg-slate-600 text-white' : 'text-slate-950 bg-slate-200'} rounded-lg mt-2`}
                        theme={{colors: {background: darkMode ? '#1E293B' : '#E2E8F0'}}}
                        title="2. Свяжитесь с диспетчером"
                        id="2"
                    >
                        <List.Item
                            className={darkMode ? 'bg-slate-800' : `bg-slate-100`}
                            description={
                                () =>
                                    <View>
                                        <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                            Сообщите о проблеме диспетчеру. На панели управления в лифте есть кнопка со
                                            звонком. Нажмите здесь. Дождитесь ответа и сообщите нам, что произошло.
                                            Введите адрес дома и подъезд.
                                        </Text>
                                    </View>
                            }
                        />
                    </List.Accordion>
                    <List.Accordion
                        titleStyle={{color: darkMode ? 'white' : '#1E293B'}}
                        className={`${darkMode ? 'bg-slate-600 text-white' : 'text-slate-950 bg-slate-200'} rounded-lg mt-2`}
                        theme={{colors: {background: darkMode ? '#1E293B' : '#E2E8F0'}}}
                        title="3. Позвоните в аварийную службу"
                        id="3"
                    >
                        <List.Item
                            className={darkMode ? 'bg-slate-800' : `bg-slate-100`}
                            description={
                                () =>
                                    <View>
                                        <View className={"flex flex-row"}>
                                            <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                                Если диспетчер не отвечает по техническим причинам, необходимо вызвать
                                                аварийную службу. Ее номера телефонов обычно указаны в лифте и в
                                                вестибюле
                                                лифта. В идеале вам нужно выучить их или добавить в список контактов
                                                вашего
                                                телефона. Если вы не знаете номер экстренной службы, наберите:
                                            </Text>
                                        </View>
                                        <View className={""}>
                                            <TouchableOpacity
                                                onPress={call}
                                                className={"rounded-lg px-2 py-1 bg-red-600 flex justify-center items-center align-middle"}>
                                                <Text className={"text-base text-white mr-2"}>
                                                    <CallIcon
                                                        name={"call"}
                                                        color={"white"}/>112
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                            }
                        />
                    </List.Accordion>
                </List.AccordionGroup>
            </View>
        </View>
    );
};

export default Index;