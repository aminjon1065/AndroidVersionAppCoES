import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native';
import img1 from './../assets/1.jpg'
function index() {
    return (
        <ScrollView>
            <View>
                <Text className={"text-4xl text-center text-red-400 font-bold"}>
                    АММИАК
                </Text>
                <Text className="text-center text-blue-600 text-lg">
                    Основные пути проникновения аммиака в организм:
                </Text>
                <View className="ml-1">
                    <Text className="text-base">
                        - дыхательные пути;
                    </Text>
                    <Text className="text-base">
                        - контактно (поражение кожи);
                    </Text>
                    <Text className="text-base">
                        - посредством поражения глаз.
                    </Text>
                </View>
                <View className="mx-auto">
                    <Image source={img1} className="w-40 h-40" />
                </View>
                <Text className="text-center text-blue-600 text-lg">
                    К ПРИЗНАКАМ ОСТРОГО ОТРАВЛЕНИЯ ОТНОСЯТСЯ:
                </Text>
                <View className="ml-1">
                    <Text className="text-base">
                        - ринорея (насморк);
                    </Text>
                    <Text className="text-base">
                        - осиплость голоса;
                    </Text>
                    <Text className="text-base">
                        - гиперемия (переполнение кровью) видимых слизистых оболочек;
                    </Text>
                    <Text className="text-base">
                        - поражение глаз;
                    </Text>
                    <Text className="text-base">
                        - слезотечение;
                    </Text><Text className="text-base">
                        - повышенная саливация (слюноотделение);
                    </Text><Text className="text-base">
                        - першение и боль в горле;
                    </Text>
                    <Text className="text-base">
                        - возникновение чувства давления в грудной клетке;
                    </Text>
                    <Text className="text-base">
                        - приступообразный сухой кашель;
                    </Text>
                    <Text className="text-base">
                        - головная боль;
                    </Text>
                    <Text className="text-base">
                        - признаки удушья;
                    </Text>
                    <Text className="text-base">
                        - диспепсические расстройства (болезненность в животе, тошнота, рвота, изжога).
                    </Text>
                    <Text className="text-base">
                        - При появлении в помещении специфического запаха необходимо защитить дыхательные пути. Но простое закрывание лица марлевой повязкой не поможет — её необходимо прикладывать влажной. При отравлении аммиаком необходимо знать, чем нужно смачивать повязку — для этого подойдёт 2% раствор лимонной или уксусной кислоты.
                    </Text>
                    <Text className="text-base">
                        - Вдыхание паров через небулайзер (прибор для ингаляций) также может облегчить состояние пострадавшего.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default index