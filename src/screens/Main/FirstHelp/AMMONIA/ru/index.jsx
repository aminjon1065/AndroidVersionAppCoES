import React from 'react'
import {View, Text, ScrollView, Image} from 'react-native';
import img1 from './../assets/1.jpg'
import img2 from './../assets/2.jpg'
import img3 from './../assets/3.jpg'

function index() {
    return (
        <ScrollView>
            <View className={"pl-2 mb-2"}>
                <Text className={"text-4xl text-center text-red-400 font-bold"}>
                    СИМПТОМЫ ОТРАВЛЕНИЯ АММИАКОМ
                </Text>
                <Text className="text-center text-blue-600 text-xl font-bold">
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
                <View className="mx-auto mb-2">
                    <Image source={img1} className="w-40 h-40"/>
                </View>
                <Text className="text-center text-blue-600 text-xl font-bold">
                    К ПРИЗНАКАМ ОСТРОГО ОТРАВЛЕНИЯ ОТНОСЯТСЯ:
                </Text>
                <View className={"mb-2"}>
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
                </View>
                <View>
                    <Text className="text-center text-blue-600 text-xl font-bold">
                        В наиболее тяжёлых случаях, когда отравление было вызвано высококонцентрированным раствором
                        аммиака наблюдаются:
                    </Text>
                    <Text className="text-base">
                        - ожог верхних дыхательных путей, вследствие чего наблюдается расстройство дыхания и
                        кровообращения, отёк лёгких или пневмония;
                    </Text>
                    <Text className="text-base">
                        - при попадании на кожу возможен химический ожог с образованием в дальнейшем специфических
                        корочек;
                    </Text>
                    <Text className="text-base">
                        - при поражении глаз в большинстве случаев прогноз неблагоприятный, возможна потеря зрения.
                    </Text>
                    <View className={"mx-auto"}>
                        <Image source={img2}/>
                    </View>
                </View>
                <View>
                    <Text className="text-center text-blue-600 text-xl font-bold">
                        ПЕРВАЯ ПОМОЩЬ ПРИ ОТРАВЛЕНИИ АММИАКОМ
                    </Text>
                    <Text className={"text-base"}>
                        С целью предупреждения развития тяжёлых последствий при отравлении аммиаком, первая помощь
                        должна быть оказана незамедлительно. Действовать необходимо в следующей последовательности.
                    </Text>
                    <View className={"mx-auto"}>
                        <Image source={img3}/>
                    </View>
                    <Text className={"text-base"}>
                        - Вызвать бригаду скорой помощи.
                    </Text>
                    <Text className={"text-base"}>
                        - Вывести пострадавшего на улицу подышать свежим воздухом.
                    </Text>
                    <Text className={"text-base"}>
                        - Промыть носоглотку, полость носа и рта слабой концентрацией лимонной кислоты.
                    </Text>
                    <Text className={"text-base"}>
                        - Использовать раствор Дикаина для закапывания глаз, надеть солнцезащитные очки.
                    </Text>
                    <Text className={"text-base"}>
                        - При поражении верхних отделов пищеварительного тракта следует промыть желудок слабым солевым
                        раствором;
                    </Text>
                    <Text className={"text-base"}>
                        - При повреждении кожи и видимых слизистых — промойте тщательно проточной водой и наложите
                        повязку;
                    </Text>
                    <Text className={"text-base"}>
                        - При появлении в помещении специфического запаха необходимо защитить дыхательные пути. Но
                        простое закрывание лица марлевой повязкой не поможет — её необходимо прикладывать влажной. При
                        отравлении аммиаком необходимо знать, чем нужно смачивать повязку — для этого подойдёт 2%
                        раствор лимонной или уксусной кислоты.
                    </Text>
                    <Text className={"text-base"}>
                        - Вдыхание паров через небулайзер (прибор для ингаляций) также может облегчить состояние
                        пострадавшего.
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default index