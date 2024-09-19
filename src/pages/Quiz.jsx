import { useState } from "react";

function Quiz() {
    const [newQuestion, setNewQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [score, setScore] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);

    const questions = [
        {
            question: "What does Zam Zam mean?",
            answers: ["Holy", "water well", "Stop"],
            correct: "Stop"
        },
        {
            question: "Who was a first cousin of Prophet Muhammad (peace be upon him)?",
            answers: ["Abdullah ibn al-Abbas (ra)", "Abdullah ibn Umar (ra)", 'Ali ibn Abi Talib (ra)'],
            correct: "Abdullah ibn al-Abbas (ra)"
        },
        {
            question: "Who was Umar bin Abdul Aziz (r)?",
            answers: ["A companion of the Prophet (ﷺ)", "Grandson of Umar ibn al-Khattab", "Great grandson of Umar ibn al-Khattab"],
            correct: "Great grandson of Umar ibn al-Khattab"
        },
        {
            question: "In Jannah, what is Tuba?",
            answers: ["A fruit", "A tree", "A river"],
            correct: "A tree"
        },
        {
            question: "What does Allah’s name Al-Ghani mean?",
            answers: ["The Giver", "The Protector", "The Independent"],
            correct: "The Independent"
        }
    ];

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer);
        setIsCorrect(answer === questions[newQuestion].correct);
    };

    const nextQuestion = () => {
        setShowFeedback(true);
        setTimeout(() => {
            if (isCorrect) {
                setScore(score + 1);
            }

            if (newQuestion + 1 < questions.length) {
                setNewQuestion(newQuestion + 1);
                setSelectedAnswer(null);
                setIsCorrect(null);
                setShowFeedback(false);
            } else {
                setQuizCompleted(true);
            }
        }, 1000); // Adjust the timeout duration as needed
    };

    if (quizCompleted) {
        return (
            <section>
                <h1>Quiz Completed</h1>
                <p>Your score is {score} out of {questions.length}</p>
            </section>
        );
    }

    return (
        <section>
            <h1>Dynamic Quiz Game</h1>
            <div>
                <ul>
                    <h2>{questions[newQuestion].question} ({newQuestion + 1}/{questions.length})</h2>
                    {questions[newQuestion].answers.map((answer, index) => (
                        <li key={index}>
                            <input
                                type="radio"
                                name="option"
                                className="border border-black m-2"
                                onChange={() => handleAnswerSelection(answer)}
                                checked={selectedAnswer === answer}
                            /> {answer}
                        </li>
                    ))}
                </ul>
                {selectedAnswer && (
                    <div>
                        {showFeedback && <p>{isCorrect ? "Correct!" : "Incorrect!"}</p>}
                        <button className="border bg-slate-500 border-black p-2" onClick={nextQuestion}>Next</button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Quiz;
