import {useState} from "react";
import Results from "./results";

function Quiz () {
    const questionBank = [
        {
            question: "What is the oldest surviving jeans brand in the world?",
            options: ["Wrangler", "Lee", "Farah", "Levis"],
            answer: "Levis",
        },
        {
            question: "On a pair of jeans what was the small Fifth pocket (on the right) originally designed to hold?",
            options: ["Small coins", "A pocket watch", "Needle and thread"],
            answer: "A pocket watch",
        },
        {
            question: "Jeans are made from a natural XXXXXX plant?",
            options: ["Silk","Cotton","Polyester"],
            answer: "Cotton",
        },        
    ];

    const initialAnswers = questionBank.map(() => null);
    
    const [userAnswers, setUserAnswers] = useState(initialAnswers);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const selectedAnswer = userAnswers[currentQuestion];
    const [isQuizFinished, setIsQuizFInished] = useState(false);
    function handleSelectOption(option) {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;

        setUserAnswers(newUserAnswers);
    }

 
    function goToNext() {
        if (currentQuestion === questionBank.length -1) {
            setIsQuizFInished(true)} else {};
        setCurrentQuestion(currentQuestion + 1)};
    function goToPrev() {
        if (currentQuestion > 0)
            setCurrentQuestion(currentQuestion - 1);
    };
    
    function restartQuiz() {
        setUserAnswers(initialAnswers);
        setCurrentQuestion(0)
        setIsQuizFInished(false);
    };

    if (isQuizFinished) {
        return ( 
            <Results 
            userAnswers={userAnswers} 
            questionBank={questionBank} 
            restartQuiz={restartQuiz}/>);
    };
    return (<div>
        <h2> Question {currentQuestion+1}</h2>
        <p className="question">{questionBank[currentQuestion].question} </p>
        {questionBank[currentQuestion].options.map((option) => (
        <button 
          className={"option" + (selectedAnswer === option ? " selected": "")}
        onClick={() => handleSelectOption(option)}>
            {""}
            {option}{""}
        </button>
        ))}
        <div className="nav-buttons">
            <button onClick={goToPrev} disabled={currentQuestion === 0}> Previous</button>
            <button onClick={goToNext} disabled={!selectedAnswer}>
                {currentQuestion === questionBank.length -1 ? "Finish Quiz" : "Next"}
                </button>

        </div>
       

    </div>);

    };
export default Quiz
    
