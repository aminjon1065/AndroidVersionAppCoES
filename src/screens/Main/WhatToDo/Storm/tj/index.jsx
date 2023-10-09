import React from 'react';
import {View, Text} from "react-native";
import {List} from 'react-native-paper';

const Index = ({darkMode}) => {
    return (
        <View>
            <Text className={"text-4xl text-center text-red-400 font-bold"}>
                Тӯфон
            </Text>
            <Text className={`text-slate-900 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                Раъд хатарнок аст вақте, ки пас аз задани раъд садо медиҳад. Дар ин ҳолат, фавран таддбири
                пешгирикунанда намоед.
            </Text>
            <List.AccordionGroup>
                <List.Accordion
                    title="Чи бояд кард: раъду барқ дар деҳот"
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
                                    <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                                        Тирезаҳо, дарҳо, сӯрохиҳо, дудбароҳоро махкам кунед. Танурҳои электрониро хомуш
                                        намоед.
                                        Бо телефон гап назанед.
                                        Дар вакти раъду барқ задан дар назди симҳои барқӣ ва антенна наистед.
                                        Дар назди тиреза наистед, агар имкон бошад, телевизор, радио ва
                                        дигар асбобхои электрикиро хомуш кунед.
                                    </Text>
                                </View>
                        }
                    />
                </List.Accordion>
                <List.Accordion
                    titleStyle={{color: darkMode ? 'white' : '#1E293B'}}
                    className={`${darkMode ? 'bg-slate-600 text-white' : 'text-slate-950 bg-slate-200'} rounded-lg mt-2`}
                    theme={{colors: {background: darkMode ? '#1E293B' : '#E2E8F0'}}}
                    title="Чи бояд кард:тӯфон дар набудани паноҳгоҳ"
                    id="2"
                >
                    <List.Item
                        className={darkMode ? 'bg-slate-800' : `bg-slate-100`}
                        description={
                            () =>
                                <View>
                                    <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
                                        Ба замин хобида, тамоми баданатонро ба чараёни электр дучор накунед, балки
                                        дар болои кӯл, дара ё дигар депрессияҳои табиӣ нишаста, пойҳои худро баста
                                        дастхо
                                        Агар хангоми машгулиятхои спортй фронти раъду барк барояд, фавран
                                        онҳоро бас кунед.
                                        Дар дохили он ашёҳои металлӣ (мотоцикл, велосипед, табар ва ғ.) ҷойгир кунед
                                        тараф,
                                        дур шудан
                                        20—30 метр аз онхо.
                                    </Text>
                                </View>
                        }
                    />
                </List.Accordion>
                <List.Accordion
                    titleStyle={{color: darkMode ? 'white' : '#1E293B'}}
                    className={`${darkMode ? 'bg-slate-600 text-white' : 'text-slate-950 bg-slate-200'} rounded-lg mt-2`}
                    theme={{colors: {background: darkMode ? '#1E293B' : '#E2E8F0'}}}
                    title="Действия от Грозы в машине"
                    id="3"
                >
                    <List.Item
                        className={darkMode ? 'bg-slate-800' : `bg-slate-100`}
                        description={
                            () =>
                                <View>
                                    <Text className={`text-base ${darkMode ? 'text-white' : "text-slate-950"}`}>
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