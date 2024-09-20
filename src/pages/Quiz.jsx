import { useEffect, useState } from "react";

function Quiz() {
    const [newQuestion, setNewQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [score, setScore] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);
    const [theme, setTheme] = useState('light')

    const toggleTheme = ()=>{
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        }
        else{
            document.documentElement.classList.remove('dark')
        }
    },[theme])

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
            <section className="text-center p-5">
                <h1 className="lg:text-4xl text-3xl font-semibold">Quiz Completed</h1>
                <p className="text-xl m-4">Your score is <span className="font-bold">{score}</span>  out of <span className="font-bold">{questions.length}</span> </p>
            </section>
        );
    }

    return (
        <>
        <section className="text-center dark:bg-gray-800 h-[100vh]">
        <button  onClick={toggleTheme} className="border lg:absolute lg:right-2  dark:bg-white dark:text-black border-gray-800 p-1 mt-2 rounded-lg bg-gray-600 text-white ">Toggle Theme</button>
            <h1 className="lg:text-4xl text-3xl  dark:text-white p-2 font-semibold">Dynamic Quiz Game</h1>
            <div className="border dark:text-white dark:bg-gray-600 bg-[#F8F8FF] rounded-lg border-black m-auto lg:mt-5 p-2  w-[90%] lg:w-[50%]">
                    <h2 className="lg:text-2xl text-xl font-semibold">{questions[newQuestion].question} <span className="text-blue-500">({newQuestion + 1}/{questions.length})</span></h2>
                <ul className="text-left pl-10">
                    {questions[newQuestion].answers.map((answer, index) => (
                        <li  key={index}>
                            <input 
                                type="radio"
                                name="option"
                                className="m-3 "
                                onChange={() => handleAnswerSelection(answer)}
                                checked={selectedAnswer === answer}
                            /> {answer} 
                        </li>
                    ))}
                </ul>
                {selectedAnswer && (
                    <div >
                        {showFeedback && <p>{isCorrect ? <span className="text-green-600">Correct!</span>: <span className="text-red-600">Incorrect!</span>}</p>}
                        <button className=" bg-slate-200 dark:bg-white dark:text-black dark:hover:bg-slate-400 hover:bg-slate-300 rounded-lg  p-2 m-5" onClick={nextQuestion}>Next</button>
                    </div>
                )}
            </div>
        </section>
        </>
    );
}

export default Quiz;
