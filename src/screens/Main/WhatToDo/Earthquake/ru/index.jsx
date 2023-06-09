import React from 'react';
import {View, Text, ScrollView} from "react-native";
import {List} from "react-native-paper";

const Index = ({darkMode}) => {
    return (
        <ScrollView>
            <View className={"pl-2"}>
                <Text className={"text-4xl text-center text-red-400 font-bold"}>
                    Землетрясение
                </Text>
                <Text className={` text-base ml-0.5 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Правила поведения во время и после землетрясений
                </Text>
                <View className={"mb-32"}>
                    <List.AccordionGroup>
                        <List.Accordion
                            title="Как действовать во время землетрясения"
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
                                            <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>Почувствуйте вибрации здания, увидите раскачивание
                                                светильников, падающие предметы, услышите нарастающий гул и звук бьющегося
                                                стекла, не паникуйте (с момента, когда вы почувствуете первые толчки, до
                                                опасных
                                                для здания вибраций, у вас есть 15 -20 секунд). Быстро покиньте здание,
                                                возьмите
                                                документы, деньги и предметы первой необходимости. Выходя из комнаты,
                                                поднимайтесь по лестнице, а не на лифте.
                                                Оказавшись на улице - оставайтесь там, но не стойте возле зданий, а идите на
                                                открытое пространство.
                                                Сохраняйте спокойствие и постарайтесь успокоить других! Если вы вынуждены
                                                оставаться внутри, встаньте в безопасное место: у внутренней стены, в углу,
                                                внутри проема в стене или возле опоры. Если есть возможность, спрячьтесь под
                                                стол — он защитит вас от падающих предметов и мусора. Держитесь подальше от
                                                окон
                                                и тяжелой мебели. Если у вас есть дети с вами, прикрывайте их собой.
                                                Не используйте свечи, спички, зажигалки - утечка газа может привести к
                                                пожару.
                                                Держитесь подальше от нависающих балконов, уступов, подоконников, следите за
                                                оборванными проводами. Если вы находитесь в автомобиле, оставайтесь снаружи
                                                на
                                                открытом пространстве, но не покидайте автомобиль, пока не прекратится удар.
                                                Будьте готовы помочь спасти других.
                                            </Text>
                                        </View>
                                }
                            />
                        </List.Accordion>
                        <List.Accordion
                            titleStyle={{color: darkMode ? 'white' : '#1E293B'}}
                            className={`${darkMode ? 'bg-slate-600 text-white' : 'text-slate-950 bg-slate-200'} rounded-lg mt-2`}
                            theme={{colors: {background: darkMode ? '#1E293B' : '#E2E8F0'}}}
                            title="Как действовать после Землетрясения"
                            id="2"
                        >
                            <List.Item
                                className={darkMode ? 'bg-slate-800' : `bg-slate-100`}
                                description={
                                    () =>
                                        <View>
                                            <Text className={`text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                                                Оказывать медицинскую помощь нуждающимся.
                                                Освободите тех, кто застрял в легко снимаемых блокадах.
                                                Будь осторожен! Обеспечьте безопасность детей, больных и пожилых людей.
                                                Успокойте их. Не берите трубку без крайней необходимости. Включи радио.
                                                Выполняйте указания местных властей, штабов по ликвидации последствий
                                                стихийного
                                                бедствия.
                                                Проверьте электропроводку на наличие повреждений. Устраните проблему или
                                                отключите электричество в квартире. Помните, что в случае сильного
                                                землетрясения
                                                электричество в городе будет автоматически отключено.
                                                Проверить газовые и водопроводные трубы на наличие повреждений. Устранение
                                                неполадок или отключение сетей. Не используйте открытый огонь. Будьте
                                                осторожны,
                                                спускаясь по лестнице, убедитесь, что она крепкая.
                                                Не приближайтесь и не входите в здания с видимыми повреждениями. Будьте
                                                готовы к
                                                сильным подземным толчкам, так как первые 2-3 часа после землетрясения
                                                наиболее
                                                опасны. Не входите в здания без крайней необходимости.
                                                Ни в коем случае нельзя выдумывать и передавать предсказания, догадки, слухи
                                                о
                                                возможных дальнейших потрясениях. Следует иметь в виду, что надежно
                                                предсказать
                                                время будущего землетрясения пока невозможно. В этом вопросе следует
                                                использовать только официальные отчеты.
                                            </Text>
                                        </View>
                                }
                            />
                        </List.Accordion>
                    </List.AccordionGroup>
                </View>
            </View>
        </ScrollView>
    );
};

export default Index;