// QuizUtils.js
export function getRandomQuestions(questions, count) {
    const shuffledQuestions = [...questions];
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
    return shuffledQuestions.slice(0, count);
}
