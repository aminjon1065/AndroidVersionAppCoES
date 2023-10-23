import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import { getRandomQuestions } from "../../../../utils/quizUtils";
import { questionsTj } from "../../../../data/QuizTj";
import { Button } from "react-native-paper";
import AnimatedLottieView from "lottie-react-native";
import animate from '../../../../assets/animation_lnobi847.json';
import animate2 from '../../../../assets/animation_lnobhxex.json';
import { useSelector } from "react-redux";

const Index = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [questions, setQuestions] = useState(getRandomQuestions(questionsTj, 10));
    const handleAnswer = (selectedAnswer) => {
        if (quizCompleted) {
            return;
        }
        const currentQuestionData = questions[currentQuestion];
        const correctAnswer = currentQuestionData.correct; // Правильный ответ
        if (correctAnswer === selectedAnswer) {
            setScore(score + 1);
        }
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizCompleted(true);
        }
    };
    const restartQuiz = () => {
        setQuestions(getRandomQuestions(questionsTj, 10));
        setCurrentQuestion(0);
        setScore(0);
        setQuizCompleted(false);
    };
    const darkModeSelector = useSelector(state => state.theme.darkMode);
    return (
        quizCompleted ?
            <View className={`h-screen w-screen ${darkModeSelector ? "bg-slate-950" : "bg-white"}`}>
                <View className={`mx-auto ${darkModeSelector ? "bg-slate-950" : "bg-white"}`}>
                    {score < 5 ?
                        <AnimatedLottieView source={animate2} className={"w-11/12 h-auto flex flex-row"} autoPlay={true}
                            loop={true} />
                        :
                        <AnimatedLottieView className={"w-11/12 h-auto flex flex-row"} autoPlay={true} loop={true}
                            source={animate} />
                    }
                    <View className={"flex-1"}>
                        <View className={"items-center justify-center my-auto mx-auto"}>
                            <Text
                                className={`text-center text-xl ${darkModeSelector ? "text-white" : "text-slate-950"}`}>Опрос
                                завершен</Text>
                            <Text className={darkModeSelector ? "text-white" : "text-slate-950"}>Ваш
                                счет: {score} из {questions.length}
                            </Text>
                        </View>
                    </View>
                    <View className={"mb-2"}>
                        <View className={"items-center justify-center my-auto mx-auto"}>
                            <Text
                                className={`text-center text-xl ${darkModeSelector ? "text-white" : "text-slate-950"}`}>Опрос
                                завершен</Text>
                            <Text className={darkModeSelector ? "text-white" : "text-slate-950"}>
                                Вы правильно ответили: {score} из {questions.length} вопросов
                            </Text>
                        </View>
                    </View>
                    <View className={"mx-auto"}>
                        <Button onPress={() => restartQuiz()} className={"w-5/12 bg-slate-800 rounded"}><Text
                            className={"text-white"}>New</Text></Button>
                    </View>
                </View>
            </View>
            :
            <View className={`h-screen w-screen ${darkModeSelector ? "bg-slate-950" : "bg-white"}`}>
                <Text className={"text-base text-center"}>{currentQuestion +    1} из {questions.length} вопросов</Text>
                <View className={`flex-1`}>
                    <Text
                        className={`flex-wrap text-2xl text-center ${darkModeSelector ? "text-white" : "text-slate-950"}`}>{questions[currentQuestion].question}</Text>
                    {questions[currentQuestion].answers.map((answer, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleAnswer(answer)}
                            className={"w-11/12 mx-auto my-2 bg-slate-800 rounded flex-wrap"}
                        >
                            <View className={"px-2 py-4"}>
                                <Text className={"text-white"}>
                                    {answer}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
    );
};
export default Index;