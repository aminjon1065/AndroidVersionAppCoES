import React from 'react';
import {ScrollView, View, Text} from "react-native";
import img1 from './../assets/1.jpg';

const Index = ({darkMode}) => {
    return (
        <View>
            <ScrollView>
                <View>
                    <Text className={"text-center text-2xl text-red-500 font-bold"}>
                        УКУС СОБАКИ.
                    </Text>
                    <Text className={`${darkMode ? "text-white" : 'text-slate-950'}`}>
                        Обработайте раны. Если вас покусала собака, вам следует сразу же обработать даже самые мелкие
                        раны, поскольку укусы животного могут занести инфекцию. Обрабатывать укусы следует так:
                    </Text>
                    <Text className={`${darkMode ? "text-white" : 'text-slate-950'}`}>
                        - Чтобы остановить незначительное кровотечение, наложите на поврежденную область легкую давящую
                        повязку из чистой тряпки или стерильной марли. Если кровотечение сильное или не прекращается
                        после наложения повязки, обратитесь к медикам.
                    </Text>
                    <Text className={`${darkMode ? "text-white" : 'text-slate-950'}`}>
                        - Тщательно промойте рану. Промойте поврежденную область теплой водой с мылом.
                    </Text>
                    <Text className={`${darkMode ? "text-white" : 'text-slate-950'}`}>
                        - Наложите повязку. Используйте пластырь (для мелких укусов) или стерильные повязки (для крупных
                        ран).
                    </Text>
                    <Text className={`${darkMode ? "text-white" : 'text-slate-950'}`}>
                        - Осмотрите раны на признаки инфекции, включая красноту, тепло, болезненность и гной. Если
                        найдете у себя некоторые из этих симптомов, обратитесь к врачу.
                    </Text>
                    <Text className={`${darkMode ? "text-white" : 'text-slate-950'}`}>
                        - Обратитесь к врачу. Если вас покусала неизвестная собака, животное, у которого изо рта шла
                        пена, или собака, у которой нашли бешенство, вам нужно будет сразу же показаться врачу, чтобы
                        вам назначили лечение от бешенства (эта болезнь может вызвать смерть).
                    </Text>
                </View>
                <View>
                    <Image source={img1} className={"w-96 h-72"} />
                </View>
            </ScrollView>
        </View>
    );
};

export default Index;