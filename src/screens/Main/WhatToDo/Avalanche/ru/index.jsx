import React from 'react';
import {View, Text, ScrollView} from "react-native";

const Index = ({darkMode}) => {
    return (
        <ScrollView>
            <View>
                <Text className={"text-4xl text-center text-red-400 font-bold"}>
                    Действия при Лавине
                </Text>
                <Text className={`ml-1 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    - Если рядом с человеком сошла лавина и деваться некуда, необходимо быстро удержаться на месте с
                    помощью
                    лыжной палки, ледоруба и воткнуть их в снег. Поместите свое тело вдоль снежной дорожки и пройдитесь.
                </Text>
                <Text className={`ml-1 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    - Если лавина сорвалась далеко от человека и до ее прихода осталось несколько секунд, необходимо
                    немедленно покинуть опасную зону и спрятаться, например, за уступ скалы;
                </Text>
                <Text className={`ml-1 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    - Если лавина все-таки застала человека, необходимо защитить органы дыхания от снежной пыли:
                    прикрыть
                    нос и рот шарфом, шапкой, рукавицами, постараться расположить тело вдоль потока снега и удержаться
                    на
                    поверхности. снежная масса, двигая руками и ногами, совершать плавательные движения;
                </Text>
                <Text className={`ml-1 text-base ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    - Если не удалось удержаться на поверхности и вы оказались под снегом, постарайтесь сгруппироваться,
                    согнув ноги в коленях и закрыв лицо руками, прикрыв рот и нос.
                </Text>
                <Text className={`ml-1 text-base mt-2 mb-32 ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                    Когда вы почувствуете, что лавина остановилась, постарайтесь выпрямиться и оттолкнуть снег от лица,
                    создав вокруг головы воздушную полость для дыхания. Далее вам предстоит сделать быструю попытку
                    самостоятельно выбраться из снежной ловушки до того, как снег затвердеет. Старайтесь определить, где
                    верх, а где низ, и быстро выбирайтесь, передвигая снег ногами и утаптывая его; экономить силы,
                    преодолевать желание спать.
                </Text>
            </View>
        </ScrollView>
    );
};
export default Index;