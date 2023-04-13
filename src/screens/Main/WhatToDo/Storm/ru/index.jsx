import React from 'react';
import {View, Text} from "react-native";
import {List} from 'react-native-paper';

const Index = () => {
    return (
        <View>
            <Text className={"text-4xl text-center text-red-400 font-bold"}>
                Гроза
            </Text>
            <Text className={"text-slate-900 text-base"}>
                Молния опасна, когда вслед за вспышкой следует раскат грома. В этом случае немедленно примите
                профилактические меры.
            </Text>
            <List.AccordionGroup>
                <List.Accordion
                    title="Действия от Грозы в сельской местности"
                    className={"bg-slate-200 rounded-lg"}
                    id="1"
                >
                    <List.Item
                        className={"bg-slate-100"}
                        description={
                            () =>
                                <View>
                                    <Text className={"text-base"}>Закройте окна, двери, дымоходы и вентиляционные
                                        отверстия. Не включайте
                                        плиту, так как высокотемпературные газы, выходящие из духовки, имеют низкое
                                        сопротивление.
                                        Не разговаривайте по телефону: иногда молния бьет в провода, натянутые между
                                        столбами.
                                        Во
                                        время удара молнии не приближаться к линиям электропередач, громоотводам, люкам
                                        на
                                        крыше,
                                        антеннам, не стоять возле окна, по возможности выключать телевизор, радио и
                                        другие
                                        электроприборы.
                                    </Text>
                                </View>
                        }
                    />
                </List.Accordion>
                <List.Accordion
                    className={"bg-slate-200 rounded-lg mt-2"}
                    title="Действия от Грозы при отсутствие укрытия"
                    id="2"
                >
                    <List.Item
                        className={"bg-slate-100"}
                        description={
                            () =>
                                <View>
                                    <Text className={"text-base"}>
                                        Не ложиться на землю, подставляя все тело под действие электрического тока, а
                                        присесть на коточки, овраге или другом естественном углублении, обхватив ноги
                                        руками
                                        Если грозовой фронт настиг Вас во время занятий спортом, то немедленно
                                        прекратите их.
                                        Металлические предметы (мотоцикл, велосипед, ледоруб и т. д. ) положите в
                                        сторону,
                                        отойдите
                                        от них на 20–30 м.
                                    </Text>
                                </View>
                        }
                    />
                </List.Accordion>
                <List.Accordion
                    className={"bg-slate-200 rounded-lg mt-2"}
                    title="Действия от Грозы в машине"
                    id="3"
                >
                    <List.Item
                        className={"bg-slate-100"}
                        description={
                            () =>
                                <View>
                                    <Text className={"text-base"}>
                                        Не покидайте его, при этом закройте окна.
                                    </Text>
                                </View>

                        }
                    />
                </List.Accordion>
            </List.AccordionGroup>
        </View>
    );
};

export default Index;