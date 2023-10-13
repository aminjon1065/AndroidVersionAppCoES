import React, {useState} from 'react';
import {Text, View} from "react-native";
import {getRandomQuestions} from "../../../utils/quizUtils";
import {questionsRu} from "../../../data/QuizRu";
import {Button} from "react-native-paper";
import AnimatedLottieView from "lottie-react-native";
// import animate from './../../../assets/animation_lnobi847.json';
import animate from './../../../assets/animation_lnobhxex.json';

const Index = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    // Замените ваш исходный массив questionsRu на случайные вопросы
    const [questions, setQuestions] = useState(getRandomQuestions(questionsRu, 10));

    const handleAnswer = (selectedAnswer) => {
        if (quizCompleted) {
            // Если квиз уже завершен, игнорируйте ответы
            return;
        }

        const currentQuestionData = questions[currentQuestion];

        if (currentQuestionData.answers[currentQuestionData.correct] === selectedAnswer) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // Квиз завершен
            setQuizCompleted(true);
        }
    };

    const restartQuiz = () => {
        setQuestions(getRandomQuestions(questionsRu, 10));
        setCurrentQuestion(0);
        setScore(0);
        setQuizCompleted(false);
    };

    return (
        <View>
            {quizCompleted ? (
                <View className={"mx-auto"}>
                    <AnimatedLottieView className={"w-11/12 h-auto flex flex-row"} autoPlay={true} loop={true}
                                        source={animate}>
                        <View className={"items-center justify-center my-auto mx-auto"}>
                            <Text className={"text-center"}>Квиз завершен</Text>
                            <Text>Ваш счет: {score} из {questions.length}</Text>
                        </View>
                    </AnimatedLottieView>
                </View>
            ) : (
                <View>
                    <Text>{questions[currentQuestion].question}</Text>
                    {questions[currentQuestion].answers.map((answer, index) => (
                        <Button
                            key={index}

                            onPress={() => handleAnswer(answer)}
                        >{answer}</Button>
                    ))}
                </View>

            )}

            <Button onPress={() => restartQuiz()}>New</Button>
        </View>
    );
};

export default Index;